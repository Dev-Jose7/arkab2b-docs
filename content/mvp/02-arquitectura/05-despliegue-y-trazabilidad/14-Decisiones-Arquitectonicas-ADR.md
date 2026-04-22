---
title: "Decisiones arquitectonicas ADR"
linkTitle: "14. ADR"
weight: 14
url: "/mvp/arquitectura/despliegue-y-trazabilidad/decisiones-arquitectonicas-adr/"
aliases:
  - "/mvp/arquitectura/arc42/adr/"
---

## Proposito de la seccion
Registrar las decisiones tecnicas activas que condicionan el baseline actual.

## ADR vigentes del sistema
| ID | Decision | Estado |
|---|---|---|
| `ADR-01` | un servicio por contexto de negocio con DB privada | vigente |
| `ADR-02` | `config-server` + `eureka-server` + `api-gateway` como plano tecnico base | vigente |
| `ADR-03` | integracion derivada por outbox + Kafka + consumers con dedupe | vigente |
| `ADR-04` | JWT emitido por IAM y propagado en llamadas HTTP internas | vigente |
| `ADR-05` | contexto interno `INTERNAL_ACTOR` para schedulers/consumers sin usuario humano | vigente |
| `ADR-06` | despliegue local y cloud soportado oficialmente con `Docker Compose` | vigente |
| `ADR-07` | gateway como unica superficie publica en cloud | vigente |
| `ADR-08` | seeds SQL idempotentes con UUID y datos realistas como baseline | vigente |

## Decisiones retiradas o no vigentes
| Decision previa | Motivo de retiro |
|---|---|
| token tecnico separado por servicio para integracion HTTP | aumentaba complejidad y fue reemplazado por JWT propagado |
| plataforma cloud previa descrita fuera del baseline compose | no representa el baseline operacional aprobado hoy |
| lenguaje documental previo centrado en contexto distinto al organizacional | el sistema hoy opera sobre `organizationId` |

## Evidencia tecnica asociada
- `scripts/start-integrated-local.sh` y `scripts/start-digitalocean-compose.sh`.
- `docker-compose.yml` y `docker-compose.cloud.yml`.
- configuracion y llaves de IAM montadas desde host/entorno.
- hubs Swagger/E2E servidos por `api-gateway`.
- pruebas y smoke integrados del baseline.
