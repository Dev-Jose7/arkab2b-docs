---
title: "Trazabilidad distribuida"
linkTitle: "14. Trazabilidad distribuida"
weight: 14
url: "/mvp/operacion/salud-y-observabilidad/trazabilidad-distribuida/"
aliases:
  - "/mvp/operacion/trazabilidad-operativa/"
---

## Proposito de la seccion
Formalizar como se siguen operaciones a traves de llamadas sync y async.

## IDs obligatorios
| ID | Uso |
|---|---|
| `traceId` | traza tecnica de punta a punta |
| `correlationId` | correlacion funcional del flujo |
| `organizationId` | contexto organizacional de negocio |
| `eventId` | identidad unica de cada hecho asincrono |

## Regla de preservacion
Estos identificadores deben sobrevivir al paso por gateway, servicios internos,
eventos, consumers, callbacks y evidencia operativa cuando aplique.
