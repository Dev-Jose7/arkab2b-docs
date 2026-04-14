---
title: "Matriz de cobertura y trazabilidad"
linkTitle: "6. Matriz de cobertura y trazabilidad"
weight: 6
url: "/mvp/calidad/modelo-de-verificacion/matriz-de-cobertura-y-trazabilidad/"
aliases:
  - "/mvp/calidad/mapeo-pruebas/"
---

## Proposito de la seccion
Relacionar lo que debe protegerse con la evidencia que hoy existe para hacerlo
verificable.

## Matriz base
| Objeto protegido | Evidencia principal |
|---|---|
| autenticacion, sesion y JWT | pruebas de `identity-access-service`, smoke del gateway, pruebas manuales por Swagger |
| contexto organizacional y datos de directorio | pruebas de `directory-service`, guias manuales del backlog, DB snapshot |
| catalogo vendible y precios | pruebas de `catalog-service`, hubs Swagger/E2E, seeds realistas |
| stock, reservas e idempotencia | pruebas de `inventory-service`, smoke integrado y consultas manuales |
| carrito, checkout y pedido | pruebas de `order-service`, light E2E, E2E Hub, guia manual HU |
| notificaciones derivadas | pruebas de `notification-service`, callbacks y runbooks operativos |
| proyecciones y reportes | pruebas de `reporting-service`, ejecuciones semanales y artifacts |
| despliegue local/cloud | scripts oficiales, compose base/cloud, smoke y auditoria de readiness |

## Trazabilidad entre pilares
| Pilar origen | Se conecta con Calidad mediante |
|---|---|
| Producto | HU del backlog, CUF y guias manuales |
| Dominio | ownership, reglas, eventos y politicas |
| Arquitectura | servicios, contratos sync/async, seguridad y despliegue |
| Operacion | handoff de readiness, smoke, runbooks y evidencia de stack |

## Huecos hoy visibles
- no existe una matriz automatizada unica que consolide toda la trazabilidad;
- la cobertura no funcional profunda sigue parcial;
- algunas validaciones E2E siguen siendo manuales asistidas.
