---
title: "Capacidad y rendimiento operativo"
linkTitle: "24. Capacidad y rendimiento operativo"
weight: 24
url: "/mvp/operacion/soporte-y-continuidad/capacidad-y-rendimiento-operativo/"
---

## Proposito de la seccion
Definir que limites operativos importan y como se detecta presion real.

## Componentes mas sensibles
- `order-service` por orquestacion sync;
- `inventory-service` por contencion de stock/reserva;
- `kafka` y consumers por backlog asincrono;
- `postgres` por acumulacion de tablas operativas y auditoria;
- el host cloud simple por concentrar todo el baseline en una sola maquina.

## Estado actual
Existe recomendacion tecnica razonable para operar en un Droplet con recursos
prudentes, pero no una certificacion de rendimiento formal bajo carga.
