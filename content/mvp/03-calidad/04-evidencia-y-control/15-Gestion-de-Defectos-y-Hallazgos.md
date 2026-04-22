---
title: "Gestion de defectos y hallazgos"
linkTitle: "15. Gestion de defectos y hallazgos"
weight: 15
url: "/mvp/calidad/evidencia-y-control/gestion-de-defectos-y-hallazgos/"
---

## Proposito de la seccion
Ordenar como se clasifican y gobiernan los problemas encontrados durante la
validacion.

## Clasificacion
| Severidad | Criterio |
|---|---|
| `P0` | rompe seguridad, integridad o el flujo comercial critico |
| `P1` | afecta una capacidad importante sin workaround razonable |
| `P2` | degrada la experiencia, la evidencia o una capacidad secundaria |
| `P3` | mejora deseable o deuda menor sin impacto directo en baseline |

## Tratamiento
- `P0` y `P1` no se aceptan como cierre silencioso de baseline.
- `P2` puede aceptarse solo con evidencia, impacto acotado y plan de correccion.
- `P3` se mantiene como deuda controlada si no contradice readiness declarado.

## Registro esperado
Cada hallazgo debe conservar:
- descripcion tecnica concreta;
- servicio o flujo afectado;
- severidad;
- evidencia asociada;
- decision: corregido, aceptado temporalmente o bloqueante.
