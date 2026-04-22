---
title: "Calidad de integracion"
linkTitle: "10. Calidad de integracion"
weight: 10
url: "/mvp/calidad/validacion-del-sistema/calidad-de-integracion/"
---

## Proposito de la seccion
Demostrar que el sistema funciona como conjunto distribuido y no solo como
suma de servicios individuales.

## Integraciones sync criticas
- `order-service -> directory-service`
- `order-service -> catalog-service`
- `order-service -> inventory-service`
- `api-gateway -> servicios HTTP`
- `order-service -> notification-service` para endpoints operativos agregados

## Integraciones async criticas
- productores de negocio -> `notification-service`
- productores de negocio -> `reporting-service`
- relay -> `kafka`
- consumer -> `processed_events` / `consumer_checkpoints`

## Evidencia exigida
| Dimension | Evidencia |
|---|---|
| compatibilidad HTTP | tests de consumidores, smoke y pruebas manuales encadenadas |
| compatibilidad de eventos | tests de compatibilidad de consumers y validacion en runtime |
| errores cross-service | respuestas canonicas y logs trazables |
| seguridad de integracion | JWT propagado o contexto interno controlado |
| consistencia derivada | consumo sin duplicado anomalo, checkpoints y proyecciones actualizadas |

## Regla de aceptacion
No se acepta una baseline donde el login funcione pero el pedido no pueda cerrar
por rotura de contratos internos, ni una baseline donde los pedidos existan pero
sus efectos derivados no puedan observarse en notificacion o reporting.
