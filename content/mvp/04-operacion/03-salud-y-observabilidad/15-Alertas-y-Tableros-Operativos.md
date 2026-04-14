---
title: "Alertas y tableros operativos"
linkTitle: "15. Alertas y tableros operativos"
weight: 15
url: "/mvp/operacion/salud-y-observabilidad/alertas-y-tableros-operativos/"
---

## Proposito de la seccion
Definir que señales requieren atencion operativa y como resumir el estado del
sistema para consumo humano.

## Alertas minimas recomendadas
- servicio critico sin readiness;
- gateway con errores `5xx` sostenidos;
- consumer lag alto o checkpoint detenido;
- relay de outbox atascado;
- proveedor de notificaciones degradado;
- `directory` o `inventory` caidos afectando `order-service`.

## Estado actual
El baseline todavia depende de supervision manual reforzada por runbooks,
`docker logs`, health checks y evidencias de smoke. La deuda actual no es la
falta de señales utiles, sino la falta de una capa de tablero/alerta madura.
