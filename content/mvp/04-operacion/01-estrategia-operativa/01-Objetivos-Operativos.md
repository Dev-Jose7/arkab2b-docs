---
title: "Objetivos operativos"
linkTitle: "1. Objetivos operativos"
weight: 1
url: "/mvp/operacion/estrategia-operativa/objetivos-operativos/"
aliases:
  - "/mvp/operacion/estrategia-operativa/"
---

## Proposito de la seccion
Definir que debe sostener Operacion una vez el sistema esta vivo.

## Objetivos operativos del baseline
| Objetivo | Expectativa minima |
|---|---|
| arranque reproducible | el stack puede levantarse con scripts y compose oficiales |
| estabilidad basica | servicios esenciales responden health/readiness y discovery |
| seguridad de runtime | solo el gateway es publico y los secretos no viven en el repo |
| trazabilidad util | logs, `traceId`, `correlationId` y estados de salud permiten diagnostico |
| recuperacion razonable | existen runbooks y rutas claras de contencion para fallos comunes |
| continuidad cloud simple | el sistema puede operar en un host Linux remoto con `Docker Compose` |

## Resultado protegido por Operacion
Que el sistema no solo exista como baseline validado, sino como software que se
puede arrancar, observar y sostener con disciplina minima en runtime.
