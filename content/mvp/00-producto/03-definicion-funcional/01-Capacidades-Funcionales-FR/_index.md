---
title: "Capacidades funcionales / FR"
linkTitle: "1. Capacidades funcionales / FR"
weight: 1
url: "/mvp/producto/capacidades-funcionales-fr/"
aliases:
  - "/mvp/producto/catalogo-rf/"
---

## Proposito del archivo
Catalogo formal de requisitos funcionales del ciclo `MVP`, organizado en un
archivo por requisito y preservando sus IDs, prioridades, estados y criterios de
aceptacion vigentes.

## Marco de definicion funcional (FR)
| Tema requerido | Cobertura en este catalogo |
|---|---|
| capacidades funcionales del producto | se agrupan por capacidad y se vinculan a IDs FR |
| funciones principales | se expresa la funcion principal por capacidad y por requisito |
| comportamientos esperados | se explicitan resultados funcionales que el sistema debe exhibir |
| casos de uso de alto nivel | se consolidan recorridos funcionales de negocio sin detalle tecnico |

## Cobertura funcional consolidada
| Capacidad funcional del producto | Funcion principal | Comportamiento esperado | Casos de uso de alto nivel | FR asociados |
|---|---|---|---|---|
| Acceso y aislamiento operacional | autenticar y autorizar por organizacion/rol | solo opera quien tiene contexto y permiso valido | acceso seguro por organizacion y perfil | FR-009 |
| Catalogo comercial y oferta vendible | administrar productos y variantes vendibles | catalogo consistente y disponible para compra | gestion de catalogo y variantes | FR-001 |
| Stock, disponibilidad y abastecimiento | mantener stock confiable y detectar faltantes | no se valida disponibilidad sobre datos inconsistentes | ajuste de stock y reporte de abastecimiento | FR-002, FR-003 |
| Carrito, pedido y pago manual | convertir intencion en compromiso comercial trazable | pedido y pago evolucionan con reglas de estado y validacion | checkout, modificacion de pedido y registro de pago manual | FR-004, FR-005, FR-010 |
| Comunicacion y seguimiento operacional | comunicar cambios relevantes y recuperar oportunidades | actor recibe visibilidad de estado y acciones de seguimiento | notificacion de estado y carrito abandonado | FR-006, FR-008 |
| Lectura comercial y expansion regional | generar lectura semanal y preparar operacion por pais | operacion semanal y readiness regional controlado | reporte semanal y configuracion por pais | FR-007, FR-011 |


## Capacidades agrupadas
| Capacidad | IDs asociados |
|---|---|
| acceso y aislamiento operacional | FR-009 |
| catalogo comercial y oferta vendible | FR-001 |
| stock, disponibilidad y abastecimiento | FR-002, FR-003 |
| carrito, pedido y pago manual | FR-004, FR-005, FR-010 |
| comunicacion y seguimiento operacional | FR-006, FR-008 |
| lectura comercial y expansion regional | FR-007, FR-011 |

## Resumen por prioridad
| Prioridad | IDs |
|---|---|
| Must | FR-001, FR-002, FR-004, FR-005, FR-009, FR-011 |
| Should | FR-003, FR-006, FR-007, FR-010 |
| Could | FR-008 |

## Requisitos
### Must
- [FR-001 - Gestionar catalogo de productos y variantes](./fr-001/)
- [FR-002 - Actualizar stock con validaciones](./fr-002/)
- [FR-004 - Crear pedido con multiples productos](./fr-004/)
- [FR-005 - Modificar pedido antes de confirmacion](./fr-005/)
- [FR-009 - Gestionar acceso por organizacion y rol](./fr-009/)
- [FR-011 - Configurar parametros operativos por pais para readiness regional](./fr-011/)

### Should
- [FR-003 - Reporte de productos por abastecer](./fr-003/)
- [FR-006 - Notificar cambio de estado de pedido](./fr-006/)
- [FR-007 - Generar reporte semanal de ventas](./fr-007/)
- [FR-010 - Registrar pago manual del pedido (MVP)](./fr-010/)

### Could
- [FR-008 - Detectar y gestionar carrito abandonado](./fr-008/)
