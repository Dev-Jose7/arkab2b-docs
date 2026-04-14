---
title: "Capacidades transversales y dependencias externas"
linkTitle: "11. Capacidades y dependencias"
weight: 11
url: "/mvp/arquitectura/realizacion-tecnica/capacidades-transversales-y-dependencias-externas/"
aliases:
  - "/mvp/arquitectura/arc42/capacidades-transversales/"
---

## Proposito de la seccion
Identificar los servicios y dependencias que sostienen al baseline fuera del
nucleo puro de negocio.

## Capacidades transversales implementadas
| Capacidad | Implementacion actual |
|---|---|
| configuracion distribuida | `config-server` + `platform/config-repo` |
| discovery | `eureka-server` |
| borde unico | `api-gateway` |
| autenticacion y autorizacion | `identity-access-service` |
| observabilidad minima | `actuator`, readiness, prometheus, logs y trazabilidad de IDs |
| hubs operativos | herramientas HTML servidas desde `api-gateway` |
| automatizacion de stack | scripts locales y cloud dentro de `scripts/` |

## Dependencias externas y de plataforma
| Dependencia | Estado en el baseline |
|---|---|
| `Postgres` | obligatoria |
| `Redis` | soporte operativo y cache |
| `Kafka` | obligatoria para plano async |
| proveedor de notificaciones | externa, degradable segun canal |
| host Linux con Docker Compose | baseline oficial para cloud |
| llaves JWT/JWKS | obligatorias y montadas por host/entorno |

## Dependencias criticas vs degradables
| Tipo | Dependencias |
|---|---|
| criticas | `config-server`, `eureka-server`, `postgres`, `kafka`, `api-gateway`, JWT keys |
| degradables controladas | `redis` segun flujo, proveedor de notificaciones, generacion de artifacts, dashboards futuros |

## Acoplamientos autorizados
- Los servicios pueden depender de `config-server` para configuracion inicial.
- Los clientes HTTP internos pueden depender de discovery por nombre.
- `notification-service` puede depender de provider externo sin transferirle ownership de negocio.
- `reporting-service` puede depender de artifacts locales/volumen mientras no exista storage dedicado.

## Restricciones activas
- No se documentan plataformas cloud previas como parte del baseline obligatorio.
- El baseline cloud aprobado es host Linux con `Docker Compose`.
- Ninguna capacidad transversal autoriza acceso directo a bases ajenas.
