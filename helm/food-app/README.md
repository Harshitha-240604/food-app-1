# food-app Helm chart

## Install

From `yaml`:

```bash
helm install food-app ./helm/food-app
```

## Upgrade

```bash
helm upgrade food-app ./helm/food-app
```

## Uninstall

```bash
helm uninstall food-app
```

## Expose in browser

### LoadBalancer service

The chart default uses `service.type: LoadBalancer`.

```bash
kubectl get svc
```

If your cluster supports `LoadBalancer`, use the external IP shown by `kubectl get svc` and open `http://<EXTERNAL-IP>`.

### Local clusters

If you are using `minikube`:

```bash
minikube service food-app-food-app --url
```

If `LoadBalancer` is not available, switch to NodePort:

```bash
helm upgrade food-app ./helm/food-app --set service.type=NodePort
```

Then open `http://<NODE-IP>:30007`.

### Ingress

Enable ingress in `values.yaml` or with `--set ingress.enabled=true` and set a host:

```bash
helm upgrade food-app ./helm/food-app --set ingress.enabled=true --set ingress.hosts[0].host=food-app.local
```

Then point `food-app.local` to your cluster ingress IP and open it in the browser.
