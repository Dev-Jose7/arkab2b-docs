---
title: "Operacion de integraciones asincronas"
linkTitle: "17. Operacion de integraciones asincronas"
weight: 17
url: "/mvp/operacion/integracion-y-resiliencia-en-runtime/operacion-de-integraciones-asincronas/"
---

## Proposito de la seccion
Formalizar como vive el plano de eventos en runtime.

## Componentes operativos del plano async
| Componente | Funcion |
|---|---|
| outbox | retiene eventos pendientes post-commit |
| relay | publica desde outbox hacia Kafka |
| Kafka | transporta hechos entre bounded contexts |
| consumer | procesa, deduplica y persiste efectos |
| `processed_events` | evita reprocesos indebidos |
| `consumer_checkpoints` | hace visible el avance del consumo |

## Situaciones a vigilar
- topico faltante o broker parcial;
- relay sin publicar;
- lag sostenido;
- consumer caido;
- replay manual sin dedupe efectivo.
