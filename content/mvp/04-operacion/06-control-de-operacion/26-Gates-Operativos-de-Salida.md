---
title: "Gates operativos de salida"
linkTitle: "26. Gates operativos de salida"
weight: 26
url: "/mvp/operacion/control-de-operacion/gates-operativos-de-salida/"
aliases:
  - "/mvp/operacion/criterios-promocion-entre-ambientes/"
---

## Proposito de la seccion
Definir que debe cumplirse para declarar listo un estado operativo determinado.

## Gates minimos
| Estado de salida | Exigencia |
|---|---|
| listo para integracion local | stack local arriba, smoke base y datos baseline coherentes |
| listo para cloud compose | scripts remotos funcionales, `.env.cloud` definido, gateway publico unico |
| listo para operacion razonable | runbooks disponibles, health/readiness verificables, evidencia operativa minima |

## Bloqueantes
- servicios esenciales sin readiness;
- compose cloud exponiendo puertos internos;
- secretos ausentes o hardcodeados;
- gateway o auth edge rotos;
- Kafka o Postgres sin persistencia razonable.
