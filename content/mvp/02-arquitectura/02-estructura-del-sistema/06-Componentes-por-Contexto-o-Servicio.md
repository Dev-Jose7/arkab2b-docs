---
title: "Componentes por contexto o servicio"
linkTitle: "6. Componentes por contexto"
weight: 6
url: "/mvp/arquitectura/estructura-del-sistema/componentes-por-contexto-o-servicio/"
aliases:
  - "/mvp/arquitectura/arc42/componentes/"
---

## Proposito de la seccion
Describir, por servicio, los componentes ejecutables que materializan casos de
uso, persistencia, integracion y soporte transversal del baseline.

## Estructura comun por servicio
| Capa | Rol esperado |
|---|---|
| `application` | comandos, queries, use cases y orquestacion de reglas |
| `domain` | entidades, agregados, politicas e invariantes |
| `infrastructure.adapter.in` | controllers HTTP, consumidores y schedulers |
| `infrastructure.adapter.out` | persistencia, clientes HTTP, productores y providers |
| `infrastructure.config` | wiring, seguridad, clientes discovery y bootstrap |

## Identity Access
| Componente | Responsabilidad |
|---|---|
| controllers de auth/iam | login, refresh, logout, introspection, administracion IAM |
| manager JWT reactivo | validacion y construccion del principal autenticado |
| servicios de sesion y usuario | ciclo de sesion, permisos y auditoria |
| adapters out de persistencia/evento | usuarios, sesiones, outbox y relay |
| Regla clave | el JWT emitido ya carga `organizationId` y `countryCode` cuando aplica |

## Directory
| Componente | Responsabilidad |
|---|---|
| controllers organizacionales | organizaciones, direcciones, contactos, politicas |
| servicios de resolucion | contexto de checkout y parametros organizacionales |
| adapters out de persistencia | tablas `organization_*`, auditoria y outbox |
| consumers/schedulers | reaccion a eventos y mantenimiento controlado |
| Regla clave | `directory-service` es owner de la verdad organizacional |

## Catalog
| Componente | Responsabilidad |
|---|---|
| controllers comerciales | productos, variantes, precios, oferta, maestros visibles |
| registro compuesto de producto | endpoint agregado para cubrir backlog sin rediseñar dominio |
| adapters de persistencia | `products`, `variants`, `prices`, `offers`, outbox |
| resolucion interna de checkout | disponibilidad comercial y precio vigente |
| Regla clave | toda resolucion comercial usa `organizationId`, `sku`, moneda y tipo de precio |

## Inventory
| Componente | Responsabilidad |
|---|---|
| controllers de stock | stock items, ajustes, movimientos, low stock |
| servicios de reserva y validacion | anti-sobreventa, confirmacion, expiracion |
| backlog read service | lecturas operativas y reporte de bajo stock |
| adapters out | `stock_items`, `stock_reservations`, `stock_movements`, outbox |
| Regla clave | la reserva y la disponibilidad son responsabilidad exclusiva de inventario |

## Order
| Componente | Responsabilidad |
|---|---|
| controllers de carrito/pedido | carrito activo, checkout, pedidos, ajustes, cambios de estado |
| endpoints agregados del backlog | registro de orden, carritos abandonados, resumen semanal |
| discovery web clients | integracion sync con `directory`, `catalog`, `inventory`, `notification` |
| backlog read service | consultas operativas adicionales sin invadir dominio |
| Regla clave | `order-service` orquesta el flujo comercial pero no toma ownership de datos ajenos |

## Notification
| Componente | Responsabilidad |
|---|---|
| controllers de notificacion | consulta, dispatch, detalle, timeline, callbacks |
| consumers de eventos | reaccion a cambios relevantes del dominio |
| adapters a provider | salida hacia proveedor externo y recepcion de callback |
| persistencia | solicitudes, intentos, callbacks, politicas, templates, outbox |
| Regla clave | procesa hechos de negocio; no define el flujo comercial de origen |

## Reporting
| Componente | Responsabilidad |
|---|---|
| controllers de reportes | ejecuciones semanales, proyecciones, artefactos |
| consumers de hechos | consolidacion de analitica y checkpoints |
| projections | ventas, reposicion, KPI operativos |
| persistencia | `analytic_facts`, `*_projections`, `weekly_report_executions`, `consumer_checkpoints` |
| Regla clave | la lectura analitica es derivada y eventual; no reemplaza la verdad transaccional |

## Plano tecnico transversal
| Componente | Responsabilidad |
|---|---|
| `config-server` | entregar configuracion por servicio y perfil |
| `eureka-server` | discovery para clientes HTTP internos |
| `api-gateway` | enrutamiento, seguridad edge, hosting de hubs HTML |
| scripts oficiales | bootstrap local/cloud, smoke y regeneracion de evidencia operacional |

## Consideraciones transversales vigentes
- Seguridad sync interna basada en bearer JWT propagado, no en token tecnico separado.
- Procesos async y schedulers operan con contexto `INTERNAL_ACTOR` cuando no existe usuario humano.
- Todo servicio mantiene outbox y dedupe donde el dominio lo exige.
- Las semillas de datos y snapshots usan UUID y datos realistas del baseline Arka.
