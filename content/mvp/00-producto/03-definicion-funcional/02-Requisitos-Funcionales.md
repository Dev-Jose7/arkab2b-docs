---
title: "Requisitos funcionales"
linkTitle: "2. Requisitos funcionales"
weight: 2
url: "/mvp/producto/requisitos-funcionales/"
---

## Propósito del archivo
Formalizar los requisitos funcionales del ciclo `MVP` a partir de los casos de
uso funcionales identificados en el bloque de definición funcional.

Esta sección reemplaza la antigua subsección de capacidades funcionales y deja
explícita la traducción:
- escenarios de negocio -> casos de uso funcionales -> requisitos funcionales

## Requisitos funcionales identificados
| ID | Requisito funcional | Caso(s) de uso de origen | Descripcion |
|---|---|---|---|
| FR-001 | `Consultar catalogo vendible` | CU-01 | El sistema debe permitir al comprador B2B consultar la oferta comercial disponible para compra. |
| FR-002 | `Filtrar y revisar productos y variantes` | CU-01 | El sistema debe permitir identificar productos, variantes y condiciones basicas de vendibilidad dentro del catalogo. |
| FR-003 | `Consultar disponibilidad comprometible` | CU-02 | El sistema debe informar la disponibilidad aplicable antes de la confirmacion de compra. |
| FR-004 | `Validar disponibilidad previa a confirmacion` | CU-02 | El sistema debe validar si la oferta seleccionada puede ser comprometida comercialmente antes de formalizar el pedido. |
| FR-005 | `Gestionar carrito de compra` | CU-03 | El sistema debe permitir crear y mantener un carrito de compra antes de la generacion del pedido. |
| FR-006 | `Agregar y ajustar productos en carrito` | CU-03 | El sistema debe permitir agregar, actualizar o retirar productos del carrito mientras no haya sido convertido en pedido. |
| FR-007 | `Crear pedido desde carrito validado` | CU-04 | El sistema debe permitir formalizar un pedido a partir de un carrito valido. |
| FR-008 | `Registrar pedido trazable` | CU-04 | El sistema debe registrar el pedido con informacion suficiente para su seguimiento posterior. |
| FR-009 | `Ajustar pedido antes de cierre` | CU-05 | El sistema debe permitir modificar un pedido dentro de la ventana permitida antes de su cierre operativo o contractual. |
| FR-010 | `Revalidar consistencia tras ajuste de pedido` | CU-05 | El sistema debe recalcular y validar la consistencia del pedido cuando este sea ajustado antes de cierre. |
| FR-011 | `Consultar estado del pedido` | CU-06 | El sistema debe permitir al comprador B2B consultar el estado vigente de su pedido. |
| FR-012 | `Exponer visibilidad trazable del ciclo del pedido` | CU-06, CU-11 | El sistema debe mostrar evidencia suficiente de avance y cambios relevantes del pedido. |
| FR-013 | `Actualizar estado operativo del pedido` | CU-07 | El sistema debe permitir a la operacion registrar cambios de estado sobre el pedido durante su ciclo operativo. |
| FR-014 | `Mantener trazabilidad de cambios operativos` | CU-07, CU-11 | El sistema debe conservar historial verificable de los cambios relevantes aplicados al pedido. |
| FR-015 | `Registrar pago manual` asociado a pedido` | CU-08 | El sistema debe permitir registrar pagos manuales vinculados a un pedido. |
| FR-016 | `Mantener evidencia del pago manual` | CU-08, CU-09 | El sistema debe conservar evidencia trazable del registro y estado del pago manual. |
| FR-017 | `Consultar estado financiero del pedido` | CU-09 | El sistema debe permitir consultar el estado financiero/manual del pedido. |
| FR-018 | `Emitir notificaciones por cambios relevantes` | CU-10 | El sistema debe emitir notificaciones cuando ocurran cambios relevantes en el ciclo comercial o del pedido. |
| FR-019 | `Registrar entrega o emisión de notificaciones` | CU-10 | El sistema debe conservar registro de las notificaciones emitidas o intentadas. |
| FR-020 | `Consultar historial de cambios relevantes` | CU-11 | El sistema debe permitir consultar el historial de cambios relevantes ocurridos sobre un pedido. |
| FR-021 | `Actualizar stock operativo` | CU-12 | El sistema debe permitir registrar cambios de stock derivados de la operacion. |
| FR-022 | `Mantener stock alineado con la realidad operativa` | CU-12 | El sistema debe conservar una representacion actualizada del stock operativo. |
| FR-023 | `Recalcular disponibilidad comprometible` | CU-13 | El sistema debe recalcular la disponibilidad comprometible cuando cambien stock, reservas o condiciones equivalentes. |
| FR-024 | `Proteger la promesa comercial mediante disponibilidad coherente` | CU-13 | El sistema debe reflejar disponibilidad coherente con el stock y las reservas vigentes. |
| FR-025 | `Generar reporte semanal de ventas` | CU-14 | El sistema debe generar una vista semanal consolidada del desempeno comercial. |
| FR-026 | `Generar reporte de abastecimiento o reposicion` | CU-15 | El sistema debe generar una vista operativa de necesidades de reposicion o abastecimiento. |
| FR-027 | `Configurar reglas operativas regionales` | CU-16 | El sistema debe permitir definir reglas operativas aplicables por pais o region. |
| FR-028 | `Aplicar reglas regionales en la operacion` | CU-17 | El sistema debe ejecutar comportamiento condicionado por la politica regional vigente. |

## Relación entre casos de uso funcionales y requisitos funcionales
| Caso de uso funcional | Requisitos funcionales derivados |
|---|---|
| CU-01 `Consultar catalogo vendible` | FR-001, FR-002 |
| CU-02 `Consultar disponibilidad antes de confirmar compra` | FR-003, FR-004 |
| CU-03 `Gestionar carrito de compra` | FR-005, FR-006 |
| CU-04 `Crear pedido a partir del carrito` | FR-007, FR-008 |
| CU-05 `Ajustar pedido antes de cierre` | FR-009, FR-010 |
| CU-06 `Consultar estado del pedido` | FR-011, FR-012 |
| CU-07 `Actualizar estado operativo del pedido` | FR-013, FR-014 |
| CU-08 `Registrar pago manual` | FR-015, FR-016 |
| CU-09 `Consultar estado financiero del pedido` | FR-016, FR-017 |
| CU-10 `Emitir notificacion por cambio relevante` | FR-018, FR-019 |
| CU-11 `Consultar historial de cambios relevantes` | FR-012, FR-014, FR-020 |
| CU-12 `Actualizar stock operativo` | FR-021, FR-022 |
| CU-13 `Recalcular disponibilidad comprometible` | FR-023, FR-024 |
| CU-14 `Generar reporte semanal de ventas` | FR-025 |
| CU-15 `Generar reporte de abastecimiento o reposicion` | FR-026 |
| CU-16 `Configurar politica regional aplicable` | FR-027 |
| CU-17 `Aplicar reglas regionales en la operacion` | FR-028 |

## Resumen por prioridad
| Prioridad | IDs |
|---|---|
| Must | FR-001, FR-002, FR-004, FR-005, FR-009, FR-011 |
| Should | FR-003, FR-006, FR-007, FR-008, FR-010, FR-012, FR-013, FR-014, FR-015, FR-016, FR-017, FR-018, FR-019, FR-020, FR-021, FR-022, FR-023, FR-024, FR-025, FR-026, FR-027, FR-028 |
| Could | N/A |

## Lectura metodológica

| Aspecto | Lectura correcta |
|---|---|
| Qué son estos requisitos funcionales | Formalizan las respuestas obligatorias que el sistema debe ofrecer frente a los casos de uso funcionales ya identificados. |
| Qué no son | No son diseño técnico, componentes de arquitectura, agregados del dominio, comandos de aplicacion ni contratos API. |
| Qué viene despues | A partir de estos requisitos funcionales, el pilar de Dominio puede formalizar lenguaje, conceptos, reglas, comportamiento, eventos y modelo táctico. |

La cadena correcta queda así:

**Problema de negocio → escenario de negocio → caso de uso funcional → requisito funcional**
