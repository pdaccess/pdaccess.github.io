#!/usr/bin/env bash
set -euo pipefail

# Configuration
REGISTRY="${REGISTRY:-127.0.0.1:5000}"
IMAGE_NAME="${IMAGE_NAME:-pdaccess}"
RELEASE="${RELEASE:-pdaccess-web}"
NAMESPACE="${NAMESPACE:-pdaccess-web}"
INGRESS_HOST="${INGRESS_HOST:-pweb.home.arpa}"
CHART_PATH="${CHART_PATH:-charts/pdaccess}"
GIT_SHA="${GIT_SHA:-$(git rev-parse --short HEAD 2>/dev/null || echo local)}"

echo "============================================"
echo " PDAccess k3s Deploy"
echo "============================================"
echo "Registry:   ${REGISTRY}"
echo "Image:      ${REGISTRY}/${IMAGE_NAME}:${GIT_SHA}"
echo "Release:    ${RELEASE}"
echo "Namespace:  ${NAMESPACE}"
echo "Ingress:    ${INGRESS_HOST}"
echo "Git SHA:    ${GIT_SHA}"
echo "============================================"

# ─── Step 0: Install nginx ingress controller if missing ───
ensure_ingress() {
    if kubectl get ingressclass nginx &>/dev/null && \
       kubectl get pods -n ingress-nginx -l app.kubernetes.io/component=controller &>/dev/null; then
        echo ""
        echo "[0/5] nginx ingress controller already running."
        return 0
    fi

    echo ""
    echo "[0/5] Installing nginx ingress controller..."
    helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx 2>/dev/null || true
    helm repo update ingress-nginx 2>/dev/null || true
    helm install ingress-nginx ingress-nginx/ingress-nginx \
        --namespace ingress-nginx \
        --create-namespace \
        --set controller.service.type=NodePort \
        --set controller.admissionWebhooks.enabled=false \
        --wait --timeout 300s 2>/dev/null || true
    echo "  nginx ingress controller installed."
}

# ─── Step 1: Build Docker image ───
build_image() {
    echo ""
    echo "[1/5] Building Docker image..."
    docker build \
        -t "${REGISTRY}/${IMAGE_NAME}:${GIT_SHA}" \
        -t "${REGISTRY}/${IMAGE_NAME}:latest" \
        .
    echo "  Image built successfully."
}

# ─── Step 2: Push to local registry ───
push_image() {
    echo ""
    echo "[2/5] Pushing image to ${REGISTRY}..."
    docker push "${REGISTRY}/${IMAGE_NAME}:${GIT_SHA}"
    docker push "${REGISTRY}/${IMAGE_NAME}:latest"
    echo "  Image pushed."
}

# ─── Step 3: Import into k3s containerd ───
import_to_k3s() {
    echo ""
    echo "[3/5] Importing image into k3s containerd..."

    local k3s_bin="/var/lib/rancher/k3s/data/5a9973ddf4c7ec074f657c06287e0e6a07a24ecafd6d326827f70ef1e95bdd2d/bin"
    if [ ! -d "$k3s_bin" ]; then
        echo "  WARNING: k3s data directory not found at ${k3s_bin}"
        echo "  Skipping ctr import (image may already be in k3s or pullPolicy is IfNotPresent)"
        return 0
    fi

    local tar_file="/tmp/pdaccess-${GIT_SHA}.tar"
    docker save "${REGISTRY}/${IMAGE_NAME}:${GIT_SHA}" -o "$tar_file"

    docker run --rm \
        -v /run/k3s:/run/k3s \
        -v "${tar_file}:/tmp/image.tar" \
        -v "${k3s_bin}:/k3s-bin" \
        --entrypoint sh \
        --cap-add=SYS_PTRACE \
        --privileged \
        alpine \
        -c "/k3s-bin/ctr -n k8s.io images import --all-platforms /tmp/image.tar"

    rm -f "$tar_file"
    echo "  Image imported into k3s containerd."
}

# ─── Step 4: Deploy with Helm ───
deploy_helm() {
    echo ""
    echo "[4/5] Deploying with Helm..."
    helm upgrade "${RELEASE}" "${CHART_PATH}" \
        --install \
        --create-namespace \
        --namespace "${NAMESPACE}" \
        --set "image.repository=${REGISTRY}/${IMAGE_NAME}" \
        --set "image.tag=${GIT_SHA}" \
        --set "image.pullPolicy=Never" \
        --set "ingress.host=${INGRESS_HOST}" \
        --wait --timeout 300s
    echo "  Deployment complete."
}

# ─── Step 5: Verify ───
verify_deployment() {
    echo ""
    echo "[5/5] Verifying deployment..."
    local ready=0
    for i in $(seq 1 30); do
        if kubectl get pods -n "${NAMESPACE}" -l "app=${IMAGE_NAME}" -o jsonpath='{.items[*].status.conditions[?(@.type=="Ready")].status}' 2>/dev/null | grep -q True; then
            ready=1
            break
        fi
        sleep 2
    done
    if [ "$ready" -eq 1 ]; then
        echo "  Pods are ready."
    else
        echo "  WARNING: Pods may not be ready yet."
    fi
}

# ─── Main ───
main() {
    command -v docker >/dev/null 2>&1 || { echo "ERROR: docker is required"; exit 1; }
    command -v kubectl >/dev/null 2>&1 || { echo "ERROR: kubectl is required"; exit 1; }
    command -v helm >/dev/null 2>&1 || { echo "ERROR: helm is required"; exit 1; }

    ensure_ingress
    build_image
    push_image
    import_to_k3s
    deploy_helm
    verify_deployment

    echo ""
    echo "============================================"
    echo " Deploy complete!"
    echo "============================================"
    echo "Access at: http://${INGRESS_HOST}"
    echo "View pods:  kubectl get pods -n ${NAMESPACE}"
    echo "View logs:  kubectl logs -n ${NAMESPACE} -l app=pdaccess -f"
    echo "============================================"
}

main "$@"
