---
title: "Gestion de incidentes"
linkTitle: "22. Gestion de incidentes"
weight: 22
url: "/mvp/operacion/soporte-y-continuidad/gestion-de-incidentes/"
---

## Proposito de la seccion
Definir como se detectan, clasifican y cierran incidentes operativos.

## Severidades minimas
| Severidad | Criterio |
|---|---|
| `SEV-1` | caida del gateway, auth rota o flujo comercial critico indisponible |
| `SEV-2` | degradacion importante de sync/async con workaround parcial |
| `SEV-3` | degradacion menor o problema acotado a una capacidad secundaria |

## Flujo minimo
1. detectar señal o reporte.
2. clasificar severidad.
3. ejecutar runbook o contencion inicial.
4. verificar recuperacion.
5. conservar evidencia y acciones aplicadas.
