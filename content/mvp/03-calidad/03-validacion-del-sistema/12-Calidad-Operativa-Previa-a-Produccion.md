---
title: "Calidad operativa previa a produccion"
linkTitle: "12. Calidad operativa previa a produccion"
weight: 12
url: "/mvp/calidad/validacion-del-sistema/calidad-operativa-previa-a-produccion/"
---

## Proposito de la seccion
Definir la puerta minima que el sistema debe cruzar antes de declararse listo
para una operacion real razonable.

## Condiciones minimas previas a operacion
- `docker compose` local y cloud coherentes con el sistema real;
- scripts oficiales de start/stop funcionando;
- health/readiness disponibles en servicios relevantes;
- `api-gateway` como unica superficie publica en cloud;
- `.env.cloud` y secretos entendibles y no silenciosos;
- smoke integrado ejecutable;
- runbooks minimos existentes para fallos recurrentes del baseline.

## Evidencia esperada
| Tipo | Fuente |
|---|---|
| arranque integrado | `scripts/start-integrated-local.sh` |
| smoke | `scripts/smoke-integrated-local.sh` |
| cloud readiness razonable | `scripts/start-digitalocean-compose.sh` + compose cloud |
| datos baseline | snapshot de DB y seeds consistentes |
| manual operable | guias HU, hubs Swagger/E2E y runbooks |

## Deudas tolerables vs bloqueantes
| Tipo | Estado |
|---|---|
| deuda tolerable | falta de observabilidad avanzada o performance formal |
| deuda bloqueante | rutas rotas, servicios internos expuestos, secrets en repo, stack no levantable |
