REGISTRY     ?= 127.0.0.1:5000
IMAGE_NAME   ?= pdaccess
RELEASE      ?= pdaccess-web
NAMESPACE    ?= pdaccess-web
INGRESS_HOST ?= pweb.home.arpa
CHART_PATH   ?= charts/pdaccess

GIT_SHA      := $(shell git rev-parse --short HEAD 2>/dev/null || echo "local")

.PHONY: build push deploy dev clean

build:
	@echo "Building Docker image: $(IMAGE_NAME):$(GIT_SHA)"
	docker build -t $(REGISTRY)/$(IMAGE_NAME):$(GIT_SHA) -t $(REGISTRY)/$(IMAGE_NAME):latest .

push: build
	@echo "Pushing to $(REGISTRY)"
	docker push $(REGISTRY)/$(IMAGE_NAME):$(GIT_SHA)
	docker push $(REGISTRY)/$(IMAGE_NAME):latest

deploy:
	@echo "Deploying $(RELEASE) to $(NAMESPACE)"
	helm upgrade $(RELEASE) $(CHART_PATH) \
		--install \
		--create-namespace \
		--namespace $(NAMESPACE) \
		--set "image.repository=$(REGISTRY)/$(IMAGE_NAME)" \
		--set "image.tag=$(GIT_SHA)" \
		--set "image.pullPolicy=Never" \
		--set "ingress.host=$(INGRESS_HOST)" \
		--wait --timeout 300s

dev: deploy
	@echo "Dev deploy complete: $(RELEASE) at $(INGRESS_HOST)"

clean:
	@echo "Uninstalling $(RELEASE) from $(NAMESPACE)"
	helm uninstall $(RELEASE) --namespace $(NAMESPACE) 2>/dev/null || true
	kubectl delete namespace $(NAMESPACE) --ignore-not-found 2>/dev/null || true
