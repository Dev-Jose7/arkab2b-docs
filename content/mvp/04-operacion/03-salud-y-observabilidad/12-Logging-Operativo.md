---
title: "Logging operativo"
linkTitle: "12. Logging operativo"
weight: 12
url: "/mvp/operacion/salud-y-observabilidad/logging-operativo/"
---

## Proposito de la seccion
Definir como debe dejar rastro el sistema en runtime.

## Contenido minimo esperado en logs
| Contexto | Campos utiles |
|---|---|
| request mutante | `traceId`, `correlationId`, servicio, operacion, resultado |
| error tecnico | codigo o clase, servicio, dependencia y contexto trazable |
| evento/consumer | tipo de evento, particion/offset si aplica, resultado |
| callback/provider | referencia de provider, estado y correlacion |

## Reglas de logging
- no registrar secretos, llaves ni tokens completos;
- evitar payloads completos cuando contengan datos sensibles;
- usar logs suficientes para diagnosticar auth, sync, async y bootstrap;
- preferir diagnostico reproducible frente a ruido excesivo.
