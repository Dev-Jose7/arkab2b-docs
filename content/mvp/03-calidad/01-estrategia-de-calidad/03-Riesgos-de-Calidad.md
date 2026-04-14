---
title: "Riesgos de calidad"
linkTitle: "3. Riesgos de calidad"
weight: 3
url: "/mvp/calidad/estrategia-de-calidad/riesgos-de-calidad/"
---

## Proposito de la seccion
Priorizar los fallos que mas amenazan la utilidad real del sistema.

## Riesgos principales
| Riesgo | Impacto |
|---|---|
| drift entre endpoints y flujos del producto | el sistema compila pero no permite ejecutar historias completas |
| rotura de JWT propagado | los flujos cross-service fallan aun con login valido |
| incompatibilidad de contratos sync | `order-service` no puede resolver checkout o pedido |
| degradacion async silenciosa | notificaciones o reportes dejan de derivarse sin evidencia clara |
| fallos de idempotencia | reintentos manuales o automaticos generan duplicados o estados inconsistentes |
| seeds irreales o incoherentes | las pruebas manuales dejan de ser ejecutables o inducen errores falsos |
| exposure cloud incorrecta | servicios internos quedan accesibles o el gateway no representa el sistema real |
| falta de evidencia | no puede afirmarse si una baseline esta lista o no |

## Zonas de mayor sensibilidad
- `identity-access-service` por autenticacion, JWT y permisos.
- `order-service` por ser orquestador sync del flujo comercial.
- `inventory-service` por integridad de stock y reservas.
- `notification-service` y `reporting-service` por el plano derivado asincrono.
- scripts y compose por ser la base de arranque local/cloud.

## Prioridad de deteccion
1. seguridad, autorizacion y contexto organizacional.
2. checkout, pedido y stock.
3. compatibilidad async y evidencia de derivacion.
4. operabilidad del stack y despliegue cloud razonable.
