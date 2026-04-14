---
title: "Contenedores"
linkTitle: "5. Contenedores"
weight: 5
url: "/mvp/arquitectura/estructura-del-sistema/contenedores/"
aliases:
  - "/mvp/arquitectura/arc42/contenedores/"
---

## Proposito de la seccion
Describir las unidades desplegables y componentes stateful que componen el
runtime oficial del sistema.

## Contenedores del baseline
| Contenedor | Tipo | Responsabilidad principal | Datos propios |
|---|---|---|---|
| `config-server` | servicio tecnico | servir configuracion externa por aplicacion/perfil | repo de configuracion referenciado |
| `eureka-server` | servicio tecnico | discovery de servicios en runtime | registro volatile |
| `api-gateway` | servicio tecnico | edge routing, seguridad de borde, activos HTML operativos | sin DB propia |
| `identity-access-service` | servicio transversal | usuarios, sesiones, JWT, permisos, auditoria de acceso | DB IAM |
| `directory-service` | servicio de negocio | organizacion, direcciones, contactos, politicas operativas | DB directory |
| `catalog-service` | servicio de negocio | productos, variantes, atributos, precios y oferta vendible | DB catalog |
| `inventory-service` | servicio de negocio | stock, reservas, movimientos e idempotencia de stock | DB inventory |
| `order-service` | servicio de negocio | carrito, checkout, pedidos, ajustes y estados operativos | DB order |
| `notification-service` | servicio derivado | solicitudes de notificacion, intentos, callbacks y politicas de canal | DB notification |
| `reporting-service` | servicio derivado | hechos analiticos, proyecciones, ejecuciones semanales y artefactos | DB reporting |
| `postgres` | dependencia stateful | persistencia relacional del baseline | multiples bases |
| `redis` | dependencia stateful | cache, soporte transitorio y optimizacion operacional | estado efimero/temporal |
| `kafka` | dependencia stateful | bus de eventos del baseline | topicos y offsets |

## Relaciones principales entre contenedores
| Desde | Hacia | Motivo |
|---|---|---|
| `api-gateway` | todos los servicios HTTP | entrada unica de requests y activos HTML |
| todos los servicios | `config-server` | bootstrap de configuracion |
| todos los servicios discovery-enabled | `eureka-server` | resolucion por nombre |
| `order-service` | `directory-service`, `catalog-service`, `inventory-service` | checkout y resolucion comercial |
| productores de eventos | `kafka` | publicacion asincrona via outbox/relay |
| `notification-service` | proveedor externo | entrega de notificaciones |
| todos los servicios stateful | `postgres` y/o `redis` | almacenamiento y soporte |

## Topologia minima por ambiente
| Ambiente | Minimo requerido |
|---|---|
| `local-integrated` | todos los contenedores del baseline en una misma maquina |
| `cloud-compose` | mismos contenedores sobre host Linux, con solo `api-gateway` publico |
| `operacion futura` | misma topologia logica con posible endurecimiento de red, observabilidad y backups |

## Regla de despliegue
Los contenedores del baseline deben poder levantarse con artefactos `bootJar`
y `docker compose`. Ningun contenedor de negocio se documenta como dependiente
de una plataforma cloud especifica para existir.
