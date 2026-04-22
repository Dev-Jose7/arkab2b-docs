---
title: "Riesgos operativos"
linkTitle: "3. Riesgos operativos"
weight: 3
url: "/mvp/operacion/estrategia-operativa/riesgos-operativos/"
aliases:
  - "/mvp/operacion/riesgos-operacionales/"
---

## Proposito de la seccion
Priorizar los fallos de runtime que mas amenazan continuidad y control.

## Riesgos principales
| Riesgo | Impacto |
|---|---|
| falta de llaves JWT o config bootstrap | los servicios no arrancan o rechazan auth |
| registro roto en Eureka | el gateway o los clientes internos no resuelven servicios |
| exposure incorrecta en cloud | se publican servicios internos o se rompe la topologia real |
| fallo de Kafka/topicos | notificaciones y reportes se atrasan o dejan de derivarse |
| degradacion de `order-service` o sus dependencias sync | el flujo comercial queda bloqueado |
| crecimiento de tablas operativas | se degrada replay, reporting o diagnostico |
| secrets incoherentes por entorno | fallan providers, DB o seguridad |
| falta de evidencia operativa | no puede saberse si el sistema esta realmente listo |
