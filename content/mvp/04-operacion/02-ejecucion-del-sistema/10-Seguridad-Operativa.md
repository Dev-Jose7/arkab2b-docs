---
title: "Seguridad operativa"
linkTitle: "10. Seguridad operativa"
weight: 10
url: "/mvp/operacion/ejecucion-del-sistema/seguridad-operativa/"
---

## Proposito de la seccion
Aterrizar la seguridad del sistema en runtime real.

## Controles operativos minimos
| Control | Estado esperado |
|---|---|
| borde unico | solo `api-gateway` expuesto al exterior |
| autenticacion | JWT emitido por IAM y aceptado por gateway/servicios |
| autorizacion | permisos por endpoint y contexto de actor |
| integracion interna | bearer JWT propagado, sin token tecnico dedicado |
| procesos internos | `INTERNAL_ACTOR` para consumers/schedulers |
| secretos | fuera del repo y montados por host |
| observabilidad sensible | logs sin secretos ni payloads criticos completos |

## Hardening minimo del baseline
- firewall abierto solo para SSH y gateway;
- puertos internos bound privados en compose cloud;
- directorios de secretos con permisos restringidos;
- no exponer `config-server`, `eureka-server`, Kafka, Redis ni Postgres.
