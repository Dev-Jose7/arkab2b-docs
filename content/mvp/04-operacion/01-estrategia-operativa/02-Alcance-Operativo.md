---
title: "Alcance operativo"
linkTitle: "2. Alcance operativo"
weight: 2
url: "/mvp/operacion/estrategia-operativa/alcance-operativo/"
---

## Proposito de la seccion
Delimitar que cubre el pilar de Operacion y que queda fuera en el lifecycle
actual.

## Dentro del alcance
- ejecucion local integrada y cloud compose;
- arranque/parada, smoke y despliegue remoto razonable;
- configuracion, secretos y llaves JWT;
- salud, logging, monitoreo minimo y runbooks;
- operacion sync/async del baseline con Kafka, outbox y consumers;
- persistencia minima, volumenes y datos semilla para pruebas reales.

## Fuera del alcance actual
- operacion multi-region o multi-cluster;
- autoscaling avanzado;
- SOC, SIEM o gobierno enterprise de seguridad;
- backup/restore completamente automatizado y certificado;
- observabilidad centralizada ya desplegada con APM o tracing full.
