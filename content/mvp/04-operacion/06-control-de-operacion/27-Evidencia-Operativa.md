---
title: "Evidencia operativa"
linkTitle: "27. Evidencia operativa"
weight: 27
url: "/mvp/operacion/control-de-operacion/evidencia-operativa/"
---

## Proposito de la seccion
Definir que artefactos demuestran que el sistema fue realmente operado y
verificado en runtime.

## Evidencia minima esperada
| Evidencia | Fuente |
|---|---|
| estado de contenedores | `docker compose ps` o salida de scripts oficiales |
| health/readiness | `curl`/smoke sobre actuator |
| logs de diagnostico | `docker logs` por servicio |
| compose y config cloud | archivos versionados y `.env.cloud` de operador |
| runbooks aplicados | registro de incidente o ejecucion manual |
| datos reales baseline | snapshot DB y consultas operativas |
