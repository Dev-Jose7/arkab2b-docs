---
title: "Runbooks operativos"
linkTitle: "21. Runbooks operativos"
weight: 21
url: "/mvp/operacion/soporte-y-continuidad/runbooks-operativos/"
aliases:
  - "/mvp/operacion/runbooks/"
---

## Proposito de la seccion
Formalizar los procedimientos de respuesta operativa ya definidos para el
baseline.

## Runbooks vigentes del repositorio
- `config-server-unavailable.md`
- `eureka-registration-failure.md`
- `api-gateway-routing-or-edge-auth-failure.md`
- `internal-jwt-propagation-or-actor-context-failure.md`
- `kafka-topic-missing-or-broker-partial.md`
- `outbox-relay-stuck.md`
- `consumer-lag-high.md`
- `directory-down-impacting-order.md`
- `inventory-down-impacting-order.md`
- `reporting-stale-or-not-consuming.md`
- `notification-provider-degraded-or-callback-failure.md`

## Regla de uso
Ante incidente repetible o degradacion conocida, se responde primero con el
runbook correspondiente y no con exploracion improvisada del sistema.
