---
title: "Metricas y monitoreo"
linkTitle: "13. Metricas y monitoreo"
weight: 13
url: "/mvp/operacion/salud-y-observabilidad/metricas-y-monitoreo/"
aliases:
  - "/mvp/operacion/sli-slo-alertas/"
---

## Proposito de la seccion
Definir que se mide del sistema y que señales operativas importan.

## Señales minimas a seguir
| Area | Señales |
|---|---|
| salud de servicios | health/readiness, reinicios, tiempo de arranque |
| edge | errores 4xx/5xx, rutas rotas, latencia base |
| sync critica | fallos `order -> directory/catalog/inventory` |
| async | lag, checkpoint, reintentos, crecimiento de pendientes |
| persistencia | disponibilidad DB, crecimiento de tablas operativas |
| provider externo | envios fallidos, callbacks faltantes o tardios |

## Estado actual
El baseline expone una base operable con `actuator` y `prometheus`, pero no se
considera cerrado un sistema avanzado de dashboards y alarmas centralizadas.
