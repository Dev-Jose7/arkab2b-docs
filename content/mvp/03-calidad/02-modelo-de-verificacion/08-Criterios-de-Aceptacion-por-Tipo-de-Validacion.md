---
title: "Criterios de aceptacion por tipo de validacion"
linkTitle: "8. Criterios de aceptacion"
weight: 8
url: "/mvp/calidad/modelo-de-verificacion/criterios-de-aceptacion-por-tipo-de-validacion/"
aliases:
  - "/mvp/calidad/convenciones-prueba/"
---

## Proposito de la seccion
Definir cuando una validacion se considera suficiente y cuando no.

## Criterios minimos
| Tipo de validacion | Se acepta cuando |
|---|---|
| unidad/dominio | cubre caminos relevantes, assertions claras y sin mocks arbitrarios del core |
| aplicacion/adapters | demuestra resultado funcional y semantica de error |
| contexto | el servicio arranca con configuracion valida y sin wiring roto |
| contrato sync/async | detecta drift real de request, response o evento |
| smoke | el stack responde health/readiness y las rutas base funcionan |
| E2E/manual | el flujo completo puede ejecutarse de punta a punta con datos baseline reales |
| no funcional | existe señal observable, no solo afirmacion teorica |

## Casos donde la evidencia no alcanza
- una prueba existe pero no protege el riesgo principal;
- el servicio compila pero el stack no levanta;
- el endpoint responde pero no encadena con el siguiente paso del flujo;
- la validacion depende de datos inventados que no existen en seeds;
- la prueba omite errores, permisos o idempotencia en mutaciones criticas.
