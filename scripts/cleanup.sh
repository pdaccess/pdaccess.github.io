#!/usr/bin/env bash
set -euo pipefail

# Configuration
REGISTRY="${REGISTRY:-127.0.0.1:5000}"
IMAGE_NAME="${IMAGE_NAME:-pdaccess}"
RELEASE="${RELEASE:-pdaccess}"
NAMESPACE="${NAMESPACE:-pdaccess}"
INGRESS_HOST="${INGRESS_HOST:-pweb.home.arpa}"
CHART_PATH="${CHART_PATH:-charts/pdaccess}"
GIT_SHA="${GIT_SHA:-$(git rev-parse --short HEAD 2>/dev/null || echo local)}"

echo "============================================"
echo " PDAccess k3s Uninstall"
echo "============================================"

echo "Uninstalling ${RELEASE} from ${NAMESPACE}..."
helm uninstall "${RELEASE}" --namespace "${NAMESPACE}" 2>/dev/null || true

echo "Removing namespace ${NAMESPACE}..."
kubectl delete namespace "${NAMESPACE}" --ignore-not-found 2>/dev/null || true

echo "Removing local images..."
docker rmi "${REGISTRY}/${IMAGE_NAME}:${GIT_SHA}" 2>/dev/null || true
docker rmi "${REGISTRY}/${IMAGE_NAME}:latest" 2>/dev/null || true
docker rmi "${REGISTRY}/${IMAGE_NAME}" 2>/dev/null || true

echo ""
echo "============================================"
echo " Clean up complete!"
echo "============================================"
