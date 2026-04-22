---
title: "Artefactos de evidencia"
linkTitle: "13. Artefactos de evidencia"
weight: 13
url: "/mvp/calidad/evidencia-y-control/artefactos-de-evidencia/"
aliases:
  - "/mvp/calidad/modelo-evidencia/"
  - "/mvp/calidad/evidencias/"
---

## Proposito de la seccion
Definir que evidencia produce el pilar y donde vive.

## Artefactos principales
| Artefacto | Ubicacion |
|---|---|
| guias de prueba manual | `docs/GUIA_PRUEBAS_MANUALES_HU_BACKLOG.md` |
| snapshot de datos baseline | `docs/DB_SNAPSHOT_SERVICIOS.md` |
| configuracion E2E manual | `api-gateway/.../tools/ARKAB2B_E2E_EXECUTION_PLAN.js` |
| hubs Swagger/E2E | `api-gateway/src/main/resources/static/tools/` |
| scripts de arranque y smoke | `scripts/` |
| runbooks operativos | `platform/operations/runbooks/` |
| resultados de tests | salida de `./gradlew test`/`compileJava` por servicio |
| evidencia de compose | `docker-compose.yml`, `docker-compose.cloud.yml`, `.env.cloud.example` |

## Regla de evidencia
Toda afirmacion de readiness, compatibilidad o cobertura debe poder apuntar a un
artefacto ejecutable, consultable o regenerable desde el repositorio.
