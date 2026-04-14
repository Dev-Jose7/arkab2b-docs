---
title: "Transicion desde Arquitectura"
linkTitle: "4. Transicion desde Arquitectura"
weight: 4
url: "/mvp/operacion/estrategia-operativa/transicion-desde-arquitectura/"
---

## Proposito de la seccion
Hacer explicito que estructuras tecnicas hereda Operacion desde Arquitectura.

## Entradas formales
| Desde Arquitectura | Operacion debe sostener |
|---|---|
| `config-server`, `eureka-server`, `api-gateway` | bootstrap, discovery y edge runtime |
| servicios de negocio y transversal IAM | arranque, salud y conectividad |
| `Postgres`, `Redis`, `Kafka` | dependencias stateful del baseline |
| JWT propagado y `INTERNAL_ACTOR` | seguridad real en runtime |
| outbox + consumers deduplicados | flujo async, checkpoints y reintentos |
| compose local/cloud | topologia real de despliegue |
