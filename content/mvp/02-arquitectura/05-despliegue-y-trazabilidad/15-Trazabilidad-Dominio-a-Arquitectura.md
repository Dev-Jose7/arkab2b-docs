---
title: "Trazabilidad dominio a arquitectura"
linkTitle: "15. Trazabilidad dominio -> arquitectura"
weight: 15
url: "/mvp/arquitectura/despliegue-y-trazabilidad/trazabilidad-dominio-a-arquitectura/"
aliases:
  - "/mvp/arquitectura/arc42/trazabilidad/"
---

## Proposito de la seccion
Hacer visible como las decisiones de dominio y producto terminan reflejadas en
servicios, contratos y mecanismos tecnicos concretos.

## Mapeo de dominio a servicios
| Fuente semantica | Materializacion arquitectonica |
|---|---|
| organizacion, direccion, parametros operativos | `directory-service` |
| autenticacion, sesion, roles y permisos | `identity-access-service` |
| producto, variante, precio, oferta | `catalog-service` |
| stock, reserva, movimiento, disponibilidad | `inventory-service` |
| carrito, checkout, pedido, ajuste y estado | `order-service` |
| notificacion derivada | `notification-service` |
| proyeccion semanal, KPI y artifacts | `reporting-service` |

## Mapeo de casos de uso vigentes
| Caso de uso / HU | Servicios implicados |
|---|---|
| registrar producto con stock inicial | `catalog-service` + `inventory-service` |
| consultar catalogo vendible | `catalog-service` (+ `directory-service` para contexto cuando aplica) |
| crear pedido desde carrito validado | `order-service` + `directory-service` + `catalog-service` + `inventory-service` |
| cambiar estado de pedido y derivar notificacion | `order-service` + `notification-service` |
| generar reportes semanales | `reporting-service` consumiendo hechos del resto del sistema |

## Mapeo de decisiones transversales
| Necesidad | Materializacion |
|---|---|
| configuracion distribuida | `config-server` |
| discovery | `eureka-server` |
| seguridad edge e integracion manual | `api-gateway` |
| trazabilidad sync/async | `traceId`, `correlationId`, `organizationId` en requests y eventos |
| consistencia derivada | outbox + Kafka + consumers deduplicados |

## Regla de trazabilidad
Cuando Producto o Dominio definan una capacidad obligatoria, Arquitectura debe
mostrar:
1. el servicio owner;
2. el contrato sync o async que la materializa;
3. la persistencia que la sostiene;
4. la decision de seguridad y despliegue que la hace operable.
