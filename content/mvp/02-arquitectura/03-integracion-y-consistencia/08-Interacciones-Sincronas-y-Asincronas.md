---
title: "Interacciones sincronas y asincronas"
linkTitle: "8. Interacciones sync/async"
weight: 8
url: "/mvp/arquitectura/integracion-y-consistencia/interacciones-sincronas-y-asincronas/"
aliases:
  - "/mvp/arquitectura/arc42/interacciones-sync-async/"
---

## Proposito de la seccion
Explicar como coopera el sistema en runtime cuando una operacion requiere
respuesta inmediata y cuando la consistencia puede cerrarse por eventos.

## Interaccion sincronica critica del baseline
```mermaid
sequenceDiagram
  participant U as Usuario/Operador
  participant G as API Gateway
  participant O as order-service
  participant D as directory-service
  participant C as catalog-service
  participant I as inventory-service

  U->>G: request con bearer JWT
  G->>O: request validado
  O->>D: resolver direccion/contexto
  D-->>O: datos organizacionales
  O->>C: resolver variante/precio/oferta
  C-->>O: informacion comercial
  O->>I: validar o reservar stock
  I-->>O: disponibilidad/reserva
  O-->>G: resultado de checkout/pedido
  G-->>U: response final
```

## Reglas del plano sync
- `api-gateway` es la unica entrada publica.
- `order-service` es el principal orquestador sync del flujo comercial.
- Los owners sync responden con semantica explicita; no se infieren defaults.
- El bearer JWT validado en borde se propaga hacia los servicios internos que lo requieren.
- Los timeouts y errores se tratan como fallos de integracion observables, no como ausencias silenciosas.

## Interaccion asincrona critica del baseline
```mermaid
sequenceDiagram
  participant T as Servicio transaccional
  participant DB as DB owner
  participant R as Outbox relay
  participant K as Kafka
  participant N as notification-service
  participant P as reporting-service

  T->>DB: persiste estado + outbox
  R->>DB: lee pendientes
  R->>K: publica evento
  K-->>N: consume y procesa
  K-->>P: consume y consolida
  N->>DB: registra solicitud/intento/callback
  P->>DB: registra hecho/proyeccion/checkpoint
```

## Reglas del plano async
| Regla | Motivo |
|---|---|
| publicacion via outbox | evita perder hechos entre commit y publicacion |
| dedupe en consumer | hace gobernable replay y reintentos |
| checkpoints y offsets visibles | permiten diagnostico y recuperacion |
| `traceId` y `correlationId` obligatorios | trazabilidad cross-service |
| `organizationId` en hechos relevantes | continuidad del contexto organizacional |

## Cuadro de uso sync vs async
| Necesidad | Mecanismo oficial |
|---|---|
| validar antes de confirmar pedido | sync |
| emitir notificacion por cambio de estado | async |
| actualizar proyeccion de ventas o reposicion | async |
| consultar salud, metadata o recursos operativos | sync |
| recordar carrito abandonado desde flujo manual | sync hacia `notification-service` |

## Decisiones vigentes relevantes
- La operacion interactiva prioriza sync para garantizar respuesta util inmediata.
- La propagacion de efectos derivados usa async para desacoplar notificacion y analitica.
- No se usa autenticacion tecnica separada en HTTP interno; el modelo oficial es JWT propagado.
- Para schedulers y consumers que no parten de un usuario humano se usa contexto interno controlado.
