---
title: "Niveles de prueba"
linkTitle: "7. Niveles de prueba"
weight: 7
url: "/mvp/calidad/modelo-de-verificacion/niveles-de-prueba/"
---

## Proposito de la seccion
Delimitar que valida cada nivel de prueba dentro del baseline.

## Niveles oficiales
| Nivel | Que valida |
|---|---|
| pruebas de dominio | invariantes, entidades, reglas y politicas |
| pruebas de aplicacion | comandos, queries y coordinacion de use cases |
| pruebas de persistencia | queries, constraints, mappers y repositorios |
| pruebas de adapters | controllers, web clients, publishers, consumers, callbacks |
| pruebas de contexto | wiring, configuracion y arranque del servicio |
| contract tests sync | compatibilidad de consumidores y producers HTTP |
| contract tests async | compatibilidad de envelope, payload y consumer |
| E2E ligeros | flujos criticos automatizados con cooperacion real |
| smoke tests | salud, discovery, edge routing y readiness del stack |
| validaciones no funcionales | seguridad, idempotencia, trazabilidad, errores, operabilidad minima |

## Regla practica
Un nivel no sustituye al otro. Cuando un riesgo cruza fronteras de servicio o
afecta runtime, la evidencia debe subir al nivel de integracion, smoke o E2E.
