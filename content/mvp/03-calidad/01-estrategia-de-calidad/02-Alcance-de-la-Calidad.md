---
title: "Alcance de la calidad"
linkTitle: "2. Alcance de la calidad"
weight: 2
url: "/mvp/calidad/estrategia-de-calidad/alcance-de-la-calidad/"
---

## Proposito de la seccion
Delimitar que cubre realmente el pilar de Calidad y que queda fuera de su
responsabilidad directa en el baseline actual.

## Dentro del alcance
| Area | Cobertura esperada |
|---|---|
| servicios Java del repo | reglas de dominio, casos de uso, adapters, contexto y seguridad |
| integraciones sync | contratos HTTP internos y semantica de error |
| integraciones async | eventos, outbox, relay, consumers, dedupe y checkpoints |
| stack integrado | arranque, readiness, smoke y evidencia operativa minima |
| cloud readiness razonable | `docker-compose.cloud.yml`, scripts remotos, exposicion y secretos |
| herramientas manuales | hubs Swagger/E2E y guias de prueba del backlog |

## Fuera del alcance directo actual
- certificacion formal de rendimiento bajo carga productiva;
- alta disponibilidad multi-host o multi-region;
- SLA de proveedor externo de notificaciones;
- hardening enterprise completo de red, WAF o secreto administrado;
- validacion de observabilidad sobre plataforma centralizada ya implantada.

## Suficiencia del alcance actual
El alcance es suficiente cuando cubre el baseline ejecutable real del sistema y
permite afirmar, con evidencia, que el producto puede desarrollarse,
validarse y operar razonablemente en local y en un host cloud simple.
