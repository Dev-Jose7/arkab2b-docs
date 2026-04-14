---
title: "Seguridad arquitectonica"
linkTitle: "12. Seguridad arquitectonica"
weight: 12
url: "/mvp/arquitectura/realizacion-tecnica/seguridad-arquitectonica/"
aliases:
  - "/mvp/arquitectura/arc42/seguridad/"
---

## Proposito de la seccion
Definir el modelo de seguridad vigente del sistema y las decisiones
arquitectonicas que lo sostienen.

## Modelo de seguridad vigente
| Capa | Decision oficial |
|---|---|
| borde | `api-gateway` expone la unica superficie publica |
| autenticacion | `identity-access-service` emite y valida JWT |
| autorizacion | permisos y roles evaluados por servicio segun contrato |
| contexto organizacional | `organizationId` y `countryCode` viajan en JWT cuando aplica |
| integracion sync interna | propagacion del mismo bearer JWT validado en borde |
| integracion async/schedulers | uso de contexto `INTERNAL_ACTOR` donde no existe usuario humano |

## Reglas de seguridad estructural
- Solo `api-gateway` se expone publicamente en cloud.
- `config-server`, `eureka-server`, bases de datos, Kafka y servicios internos quedan en red privada.
- Los secretos no viven en el repositorio; se inyectan por host, entorno o directorio montado.
- Las llaves JWT/JWKS son requisito operacional de arranque.
- Los servicios internos no deben reintroducir endpoints de emision de tokens tecnicos retirados del baseline.

## Controles por plano
| Plano | Controles relevantes |
|---|---|
| HTTP publico | autenticacion JWT, RBAC, validacion de payload, errores canonicos |
| HTTP interno | bearer propagado, segmentacion de red, contratos owner-to-owner |
| eventos | validacion de envelope, dedupe, control de consumer y trazabilidad |
| operacion | exposure minima, secretos fuera de repo, runbooks de fallo de auth/JWT |

## Riesgos que la arquitectura intenta evitar
- exposicion publica accidental de servicios internos;
- credenciales duplicadas o paralelas para integracion interna;
- perdida del contexto organizacional entre borde y servicio owner;
- callbacks o payloads sensibles sin control operacional;
- reuse inseguro de secretos en local y cloud.

## Estado actual de la decision
La arquitectura oficial ya no considera vigente el modelo de token tecnico por
servicio. El baseline actual protege integracion interna con JWT propagado,
segmentacion de red y contexto interno controlado para procesos no interactivos.
