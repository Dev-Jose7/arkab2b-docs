---
title: "Objetivos de calidad"
linkTitle: "1. Objetivos de calidad"
weight: 1
url: "/mvp/calidad/estrategia-de-calidad/objetivos-de-calidad/"
---

## Proposito de la seccion
Definir que significa calidad en ArkaB2B y que atributos deben preservarse para
aceptar el baseline como util y confiable.

## Calidad esperada del sistema
| Atributo | Expectativa minima |
|---|---|
| correccion funcional | los flujos de autenticacion, catalogo, stock, carrito, pedido, notificacion y reporte se comportan como espera Producto |
| compatibilidad distribuida | las integraciones sync y async no rompen ownership, contratos ni contexto organizacional |
| seguridad operable | el borde exige JWT, los servicios internos validan permisos y no se reintroducen tokens tecnicos paralelos |
| consistencia suficiente | el sistema evita sobreventa, controla idempotencia y sostiene proyecciones derivadas con dedupe y checkpoints |
| operabilidad basica | el stack levanta, publica health/readiness y puede diagnosticarse con logs, smoke y runbooks |
| portabilidad razonable | la misma arquitectura puede correr local y en host Linux remoto con `Docker Compose` |

## Condiciones minimas para aceptar una baseline
- compila y los servicios tocados pasan sus suites automatizadas relevantes;
- el stack integrado levanta con scripts oficiales;
- `api-gateway` resuelve rutas y seguridad edge;
- los contratos criticos `order -> directory/catalog/inventory` siguen siendo usables;
- el plano async mantiene publicacion, consumo y trazabilidad minima;
- la evidencia generada es verificable y no declarativa.

## Resultado que este pilar protege
Calidad protege que el sistema siga siendo entregable como producto ejecutable,
no solo como codigo compilable o documentacion aspiracional.
