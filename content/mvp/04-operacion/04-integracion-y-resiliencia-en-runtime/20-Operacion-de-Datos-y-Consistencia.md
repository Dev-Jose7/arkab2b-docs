---
title: "Operacion de datos y consistencia"
linkTitle: "20. Operacion de datos y consistencia"
weight: 20
url: "/mvp/operacion/integracion-y-resiliencia-en-runtime/operacion-de-datos-y-consistencia/"
---

## Proposito de la seccion
Definir como se sostienen los datos vivos del sistema en runtime.

## Objetos operativos a vigilar
| Objeto | Motivo |
|---|---|
| `idempotency_records` | evitar duplicados en mutaciones |
| `outbox_events` | confirmar publicacion pendiente o atascada |
| `processed_events` | controlar dedupe y crecimiento |
| `consumer_checkpoints` | detectar lag o stop de consumers |
| auditorias, callbacks y artifacts | crecimiento y retencion |

## Consistencia esperada
- fuerte dentro del owner transaccional;
- eventual pero trazable entre servicios;
- reproducible mediante replay controlado, seed consistente y snapshot documental.
