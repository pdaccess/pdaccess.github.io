# PDAccess Deployment

Deploy PDAccess to a Kubernetes cluster (tested on k3s) using Helm.

## Prerequisites

- k3s cluster with nginx-ingress addon enabled
- Docker (for building images)
- Helm 3+
- kubectl configured

## Local Setup

### 1. Enable nginx-ingress on k3s

```bash
# If not already enabled
sudo sed -i 's/# write-kubeconfig-mode: 0644/write-kubeconfig-mode: 0644/' /etc/rancher/k3s/config.yaml
sudo systemctl restart k3s

# Or enable via k3s service config
echo 'extraargs:' > /etc/rancher/k3s/config.yaml
echo '  - "kube-apiserver-arg=service-node-port-range=80-32767"' >> /etc/rancher/k3s/config.yaml
```

### 2. Create namespace

```bash
kubectl create namespace pdaccess --dry-run=client -o yaml | kubectl apply -f -
```

### 3. (Optional) Create TLS secret

```bash
kubectl create secret tls pweb-tls \
  --cert=/path/to/tls.crt \
  --key=/path/to/tls.key \
  -n pdaccess
```

### 4. Add Helm repo (if using a shared chart repo)

```bash
helm repo add pdaccess ./charts
helm repo update
```

## Usage

### Full deploy (build + push + deploy)

```bash
make dev
```

### Build image locally

```bash
make build
```

### Push to registry

```bash
make push
```

### Deploy with Helm

```bash
make deploy
```

### Override defaults

```bash
make deploy REGISTRY=docker.io/myuser IMAGE_NAME=pdaccess \
           RELEASE=my-pdaccess NAMESPACE=pdaccess \
           INGRESS_HOST=pweb.home.arpa
```

### Uninstall

```bash
make clean
```

## Helm Values

See `charts/pdaccess/values.yaml` for all configurable options.

Key values:
- `image.repository` — Docker image registry path
- `image.tag` — Image tag (git SHA from CI)
- `image.pullPolicy` — `IfNotPresent` for local k3s, `Always` for remote
- `replicaCount` — Number of pods (default: 2)
- `ingress.host` — Domain name (default: `pweb.home.arpa`)
- `resources` — CPU/memory limits

## CI/CD

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically:
1. Builds and pushes the Docker image on push to `main`
2. Tags with git short SHA + `latest`
3. Deploys via `helm upgrade --install`

### Required secrets

| Secret | Description |
|--------|-------------|
| `REGISTRY_URL` | Docker registry URL (default: `registry.home.arpa/pdaccess`) |
| `REGISTRY_USERNAME` | Registry username |
| `REGISTRY_PASSWORD` | Registry password |
| `KUBE_CONFIG` | Base64-encoded kubeconfig |
| `INGRESS_HOST` | Ingress hostname (default: `pweb.home.arpa`) |

## Architecture

```
Ingress (pweb.home.arpa)
  └─ Service (ClusterIP:80)
       └─ Deployment (2 pods)
            └─ Container (nginx: serving static SPA)
```

## Troubleshooting

### ImagePullError on local k3s

Set `image.pullPolicy: IfNotPresent` in values.yaml. For local dev, use `docker save` + `docker load` to import the image directly into k3s nodes.

### Ingress not working

Verify nginx-ingress controller is running:
```bash
kubectl get pods -n ingress-nginx
kubectl get ingress -n pdaccess
```

### Pod stuck in CrashLoopBackOff

Check logs:
```bash
kubectl logs -n pdaccess deployment/pdaccess-pdaccess
```
