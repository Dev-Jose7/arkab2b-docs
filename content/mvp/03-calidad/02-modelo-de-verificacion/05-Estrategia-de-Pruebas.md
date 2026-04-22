---
title: "Estrategia de pruebas"
linkTitle: "5. Estrategia de pruebas"
weight: 5
url: "/mvp/calidad/modelo-de-verificacion/estrategia-de-pruebas/"
aliases:
  - "/mvp/calidad/estrategia-pruebas/"
---

## Proposito de la seccion
Definir como se distribuye la validacion entre distintos niveles sin caer en
redundancia ni huecos de cobertura.

## Estrategia adoptada
ArkaB2B no usa una unica tecnica dominante. El modelo vigente combina:
- pruebas unitarias y de dominio para invariantes locales;
- pruebas de aplicacion/adapters/persistencia para contratos internos de servicio;
- pruebas de contexto y compatibilidad para wiring y contratos sync/async;
- light E2E y smoke automatizados para journeys criticos;
- validacion manual guiada por Swagger y E2E Hub para backlog y baseline integrada.

## Distribucion por nivel
| Nivel | Objetivo |
|---|---|
| unitario/dominio | proteger reglas, invariantes y mapeos |
| aplicacion | validar orquestacion de casos de uso |
| persistencia/adapters | asegurar queries, mappers, clients y errores canonicos |
| contexto | confirmar que el servicio arranca y cablea correctamente |
| contrato sync/async | detectar drift inter-servicio y de eventos |
| light E2E / smoke | confirmar que el sistema coopera en runtime |
| manual guiado | cerrar flujos de negocio completos y pruebas del backlog |

## Evidencia automatizada actualmente disponible
- suites `test` por servicio con `jacoco` en los servicios de negocio;
- tests de compatibilidad de consumers HTTP y de eventos;
- al menos un light E2E del flujo protegido de compra;
- `scripts/smoke-integrated-local.sh` para health, discovery y ruteo.
