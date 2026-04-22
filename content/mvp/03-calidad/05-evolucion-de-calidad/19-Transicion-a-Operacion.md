---
title: "Transicion a Operacion"
linkTitle: "19. Transicion a Operacion"
weight: 19
url: "/mvp/calidad/evolucion-de-calidad/transicion-a-operacion/"
---

## Proposito de la seccion
Definir que evidencia y que limites hereda Operacion desde Calidad.

## Handoff formal hacia Operacion
| Entrega | Uso operativo |
|---|---|
| compose base y cloud validados | arranque local y remoto razonable |
| scripts de start/stop/smoke | bootstrap, contencion y verificacion minima |
| hubs Swagger/E2E y guia HU | reproduccion manual de flujos |
| snapshot de datos baseline | consultas y validacion sobre base conocida |
| runbooks y debtas aceptadas | operacion con limites explicitos |

## Riesgos que Operacion hereda
- necesidad de vigilar el plano async y sus checkpoints;
- necesidad de proteger exposure y secretos en cloud;
- necesidad de convivir con deuda de performance y observabilidad avanzada.

## Condicion de transicion
Operacion solo debe asumir el baseline cuando los gates de Calidad esten en
verde o explicitamente cerrados como deuda controlada.
