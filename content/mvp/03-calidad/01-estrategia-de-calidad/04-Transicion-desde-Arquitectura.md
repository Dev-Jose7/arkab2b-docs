---
title: "Transicion desde Arquitectura"
linkTitle: "4. Transicion desde Arquitectura"
weight: 4
url: "/mvp/calidad/estrategia-de-calidad/transicion-desde-arquitectura/"
---

## Proposito de la seccion
Formalizar que decisiones de Arquitectura se convierten en objeto directo de
validacion dentro de Calidad.

## Entradas recibidas desde Arquitectura
| Decision arquitectonica | Lo que Calidad debe verificar |
|---|---|
| un servicio por contexto y DB privada | ausencia de acoplamientos indebidos y compatibilidad por contrato |
| `api-gateway` como borde unico | rutas, seguridad edge y hubs servidos por gateway |
| JWT emitido por IAM y propagado internamente | autenticacion end-to-end y autorizacion coherente |
| outbox + Kafka + consumers con dedupe | publicacion, consumo, replay basico y ausencia de duplicados anormales |
| `Docker Compose` local/cloud como baseline de despliegue | stack levantable, health/readiness y exposure correcta |
| seeds SQL idempotentes y snapshot documental | baseline de datos ejecutable y consistente con las guias de prueba |

## Responsabilidad concreta del pilar
Calidad no rediscute la arquitectura. Recibe sus contratos, topologia,
fronteras y decisiones de seguridad como objeto de evidencia verificable.
