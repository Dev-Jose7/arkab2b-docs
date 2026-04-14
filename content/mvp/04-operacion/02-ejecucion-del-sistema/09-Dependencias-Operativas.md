---
title: "Dependencias operativas"
linkTitle: "9. Dependencias operativas"
weight: 9
url: "/mvp/operacion/ejecucion-del-sistema/dependencias-operativas/"
---

## Proposito de la seccion
Explicitar de que depende el sistema para funcionar en runtime.

## Dependencias principales
| Dependencia | Criticidad | Impacto si cae |
|---|---|---|
| `Postgres` | critica | los servicios stateful pierden capacidad de operar |
| `Kafka` | critica para derivaciones | notificaciones y reportes se atrasan o se detienen |
| `Redis` | media | degradacion de soporte/cache segun flujo |
| `config-server` | critica al arranque | los servicios no bootstrapean configuracion |
| `eureka-server` | alta | discovery y clientes internos pueden degradarse |
| provider de notificaciones | degradable | el envio externo falla, pero el core transaccional puede seguir |
| llaves JWT | critica | auth y validacion interna fallan |
