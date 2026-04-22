---
title: "Gestion de errores y recuperacion"
linkTitle: "19. Gestion de errores y recuperacion"
weight: 19
url: "/mvp/operacion/integracion-y-resiliencia-en-runtime/gestion-de-errores-y-recuperacion/"
---

## Proposito de la seccion
Definir como se tratan y recuperan los errores tecnicos en runtime.

## Clases operativas de error
| Tipo | Ruta operativa |
|---|---|
| bootstrap/config | revisar `config-server`, secretos, perfiles y llaves |
| discovery/routing | revisar Eureka, gateway y compose networking |
| sync business critical | revisar `order-service` y dependencia owner afectada |
| async | revisar relay, Kafka, consumer y checkpoints |
| provider externo | revisar intentos, callbacks y politicas de canal |

## Regla de recuperacion
La recuperacion debe dejar evidencia: logs, estado final, runbook aplicado y,
cuando corresponda, verificacion posterior via smoke o consulta operativa.
