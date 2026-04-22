---
title: "Contratos de integracion"
linkTitle: "7. Contratos de integracion"
weight: 7
url: "/mvp/arquitectura/integracion-y-consistencia/contratos-de-integracion/"
aliases:
  - "/mvp/arquitectura/arc42/contratos-integracion/"
---

## Proposito de la seccion
Formalizar los contratos sync y async que conectan servicios sin romper
ownership de datos ni semantica de negocio.

## Contratos HTTP oficiales mas criticos
| Consumidor | Owner | Contrato | Uso |
|---|---|---|---|
| `api-gateway` | todos los servicios HTTP | endpoints publicos y operativos | entrada interactiva y hubs HTML |
| `order-service` | `directory-service` | resolucion de direccion/contexto de checkout | validar destino operativo |
| `order-service` | `catalog-service` | resolucion comercial de variante/precio | validar que la oferta siga siendo vendible |
| `order-service` | `inventory-service` | validacion/reserva/checkout de stock | evitar sobreventa |
| `order-service` | `notification-service` | emision de recordatorio de carrito abandonado y derivados del backlog | integracion operacional adicional |

## Reglas de contrato HTTP
- El owner del dato define request, response y semantica de error.
- Las llamadas internas se resuelven por nombre de servicio via discovery.
- La autenticacion interna HTTP usa el mismo bearer JWT ya validado en borde.
- Si la operacion no nace de un usuario interactivo, el servicio construye
  contexto interno explicito en vez de usar credenciales tecnicas separadas.

## Envelope canonico de eventos
| Campo | Semantica |
|---|---|
| `eventId` | identificador unico del hecho emitido |
| `eventType` | tipo de evento de dominio o integracion |
| `eventVersion` | version del contrato de evento |
| `occurredAt` | fecha/hora del hecho |
| `producer` | servicio emisor |
| `traceId` | traza distribuida de la operacion origen |
| `correlationId` | correlacion funcional del flujo |
| `organizationId` | contexto organizacional del hecho cuando aplica |
| `payload` | datos del evento |

## Contratos asincronos vigentes
| Productor | Consumidor principal | Evento/uso |
|---|---|---|
| servicios transaccionales | `notification-service` | avisos por cambios relevantes |
| servicios transaccionales | `reporting-service` | consolidacion de hechos y proyecciones |
| servicios diversos | otros consumers internos | reacciones de mantenimiento y enriquecimiento |

## Versionado y compatibilidad
| Regla | Aplicacion |
|---|---|
| cambios breaking en HTTP | nueva version de endpoint o endpoint agregado sin romper consumidores actuales |
| cambios breaking en evento | incremento de `eventVersion` y compatibilidad controlada del consumer |
| campos nuevos opcionales | preferidos sobre reemplazos de contrato |
| errores canonicos | response consistente con codigo HTTP y cuerpo trazable |

## Semantica de error esperada
- `4xx` cuando el caller envio datos invalidos, no autorizados o inconsistentes.
- `404` cuando el owner del dato confirma ausencia real.
- `409` cuando la operacion viola invariantes, unicidad o idempotencia.
- `5xx` cuando el servicio owner no puede cumplir el contrato por fallo interno.

## Resultado esperado
Los contratos de integracion deben permitir evolucion del sistema sin acceso
cruzado a datos, con trazabilidad suficiente y sin depender de acoplamientos de
base de datos ni credenciales tecnicas paralelas.
