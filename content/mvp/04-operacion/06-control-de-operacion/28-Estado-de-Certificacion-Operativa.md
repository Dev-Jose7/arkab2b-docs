---
title: "Estado de certificacion operativa"
linkTitle: "28. Estado de certificacion operativa"
weight: 28
url: "/mvp/operacion/control-de-operacion/estado-de-certificacion-operativa/"
---

## Proposito de la seccion
Formalizar el estado real de readiness operativo del sistema.

## Estados oficiales
| Estado | Significado |
|---|---|
| `No listo` | no existe evidencia minima de arranque u operacion |
| `Listo para integracion` | puede levantarse y validarse localmente |
| `Listo para cloud compose` | puede desplegarse razonablemente en un host Linux remoto |
| `Operable con deuda controlada` | puede sostenerse con limits conocidos y runbooks minimos |

## Estado actual del baseline
El sistema se considera `Listo para cloud compose` y `Operable con deuda controlada`:
- existe topologia compose cloud, scripts remotos y evidencia de despliegue razonable;
- siguen abiertos gaps de backups formales, observabilidad madura y capacidad certificada.
