---
title: "Despliegue y arranque"
linkTitle: "7. Despliegue y arranque"
weight: 7
url: "/mvp/operacion/ejecucion-del-sistema/despliegue-y-arranque/"
aliases:
  - "/mvp/operacion/estrategia-releases-deployments/"
---

## Proposito de la seccion
Formalizar como se pone el sistema en marcha.

## Scripts oficiales
| Script | Uso |
|---|---|
| `scripts/generate-local-jwt-keys.sh` | llaves locales para IAM |
| `scripts/start-integrated-local.sh` | arranque completo local |
| `scripts/stop-integrated-local.sh` | parada local, opcionalmente con limpieza de volumenes |
| `scripts/smoke-integrated-local.sh` | smoke operativo del stack integrado |
| `scripts/start-digitalocean-compose.sh` | bootstrap y despliegue remoto compose |
| `scripts/stop-digitalocean-compose.sh` | parada controlada remota |

## Orden de arranque relevante
1. secretos y llaves disponibles.
2. `config-server` y `eureka-server`.
3. `postgres`, `redis`, `kafka`.
4. `identity-access-service` y servicios de negocio.
5. `api-gateway` y verificaciones de readiness.

## Criterio de despliegue exitoso
- todos los contenedores esenciales arriba;
- readiness operativo en servicios esperados;
- registro en Eureka;
- gateway accesible;
- smoke sin fallos bloqueantes.
