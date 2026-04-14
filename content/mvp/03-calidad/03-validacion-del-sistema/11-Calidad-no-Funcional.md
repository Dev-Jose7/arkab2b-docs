---
title: "Calidad no funcional"
linkTitle: "11. Calidad no funcional"
weight: 11
url: "/mvp/calidad/validacion-del-sistema/calidad-no-funcional/"
---

## Proposito de la seccion
Convertir atributos tecnicos y operativos en validaciones exigibles.

## Atributos no funcionales exigidos hoy
| Atributo | Verificacion esperada |
|---|---|
| seguridad | JWT, RBAC, superficie publica minima, secretos fuera del repo |
| idempotencia | mutaciones criticas con `Idempotency-Key` o dedupe equivalente |
| resiliencia basica | errores visibles, retries controlados y degradacion explicable |
| observabilidad | health/readiness, logs, `traceId`, `correlationId` |
| portabilidad | arranque local y cloud con el mismo compose base |
| mantenibilidad | estructura por capas, ownership claro y pruebas por servicio |

## Lo que aun no se considera cerrado
- rendimiento bajo carga representativa de produccion;
- presupuestos formales de latencia por endpoint;
- certificacion de HA y disaster recovery.

## Criterio de suficiencia actual
La calidad no funcional es aceptable cuando protege el baseline contra fallos
claros de seguridad, integracion y operabilidad, aunque todavia no represente un
programa completo de ingenieria de performance o resiliencia enterprise.
