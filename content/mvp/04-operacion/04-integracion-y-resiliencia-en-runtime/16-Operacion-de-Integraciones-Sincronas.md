---
title: "Operacion de integraciones sincronas"
linkTitle: "16. Operacion de integraciones sincronas"
weight: 16
url: "/mvp/operacion/integracion-y-resiliencia-en-runtime/operacion-de-integraciones-sincronas/"
---

## Proposito de la seccion
Definir el comportamiento operativo del plano HTTP interno.

## Reglas operativas vigentes
| Regla | Estado esperado |
|---|---|
| discovery por nombre | servicios registrados y resolubles |
| autenticacion interna | bearer JWT propagado desde el request original |
| semantica de error | distinguir ausencia real, rechazo funcional y fallo tecnico |
| timeouts/reintentos | controlados por cliente/servicio, sin esconder fallos persistentes |
| diagnostico | logs trazables y runbooks por dependencia critica |

## Flujos mas sensibles
- `order-service -> directory-service`
- `order-service -> catalog-service`
- `order-service -> inventory-service`
- `api-gateway -> todos los owners HTTP`
