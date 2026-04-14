---
title: "Resiliencia y degradacion controlada"
linkTitle: "18. Resiliencia y degradacion controlada"
weight: 18
url: "/mvp/operacion/integracion-y-resiliencia-en-runtime/resiliencia-y-degradacion-controlada/"
---

## Proposito de la seccion
Definir como debe degradar el sistema ante fallos parciales.

## Degradaciones aceptables hoy
| Situacion | Degradacion aceptable |
|---|---|
| provider de notificaciones caido | el core transaccional sigue, el envio queda pendiente o fallido trazable |
| reporting atrasado | el flujo comercial sigue y la lectura analitica se pone al dia despues |
| redis degradado | algunos caminos pueden perder optimizacion sin corromper el core |

## Fallos donde no debe degradar silenciosamente
- auth/JWT roto;
- stock/reserva inconsistente;
- directory o catalog caidos en checkout;
- Kafka caido sin evidencia de backlog detenido.

## Regla
Cuando la degradacion sea aceptable debe quedar visible en logs, health o
runbooks. No se acepta degradacion silenciosa que oculte inconsistencia.
