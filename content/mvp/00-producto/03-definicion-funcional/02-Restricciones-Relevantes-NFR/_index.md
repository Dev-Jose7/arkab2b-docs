---
title: "Restricciones relevantes / NFR con impacto semantico"
linkTitle: "2. Restricciones relevantes / NFR"
weight: 2
url: "/mvp/producto/restricciones-relevantes-nfr/"
aliases:
  - "/mvp/producto/catalogo-rnf/"
---

## Proposito del archivo
Catalogo formal de requisitos no funcionales del ciclo `MVP`, con foco en las
restricciones que alteran la forma en que el sistema debe ser concebido,
implementado y verificado.

## Marco de definicion funcional condicionada (NFR)
| Tema requerido | Cobertura en este catalogo |
|---|---|
| capacidades funcionales del producto | se identifican capacidades funcionales cuyo cumplimiento depende de restricciones NFR |
| funciones principales | se explicita que funcion principal queda condicionada por cada grupo de NFR |
| comportamientos esperados | se define el comportamiento operativo esperado bajo umbrales y restricciones |
| casos de uso de alto nivel | se mapean casos de uso de alto nivel que dependen de estas restricciones |

## Cobertura de restricciones sobre capacidad funcional
| Grupo NFR | Capacidad funcional condicionada | Funcion principal condicionada | Comportamiento esperado | Casos de uso de alto nivel impactados | NFR asociados |
|---|---|---|---|---|---|
| Rendimiento y capacidad del flujo core | carrito, checkout y pedido | responder dentro de presupuesto de tiempo bajo carga | latencia estable y degradacion controlada en picos | crear pedido, modificar pedido | NFR-001, NFR-008 |
| Reportes y disponibilidad operativa | reportes semanales y continuidad del backend | generar reportes en ventana operativa y mantener servicio disponible | reporte oportuno y backend disponible en horario definido | reporte de ventas, reporte de abastecimiento, seguimiento operativo | NFR-002, NFR-003 |
| Integridad comercial y control de acceso | disponibilidad comercial y acceso por organizacion | proteger sobreventa y acceso cruzado | consistencia de disponibilidad y aislamiento efectivo | checkout con stock valido, operacion por organizacion/rol | NFR-004, NFR-005 |
| Trazabilidad, auditoria y observabilidad | mutaciones criticas del flujo comercial | registrar evidencia y monitorear operacion core | eventos trazables, alertas y visibilidad operacional | registrar pago manual, cambios de stock/pedido/estado | NFR-006, NFR-007 |
| Entrega tecnica continua | evolucion segura del baseline funcional | integrar cambios sin romper comportamiento esperado | gates minimos y despliegue reproducible | evolucion controlada de capacidades del MVP | NFR-009 |
| Retencion, privacidad y regionalizacion | operacion por pais y gestion de datos | aplicar politicas de datos y configuracion regional | cumplimiento de retencion y operacion sin fallback global | configuracion por pais, operacion multi-pais del MVP | NFR-010, NFR-011 |


## Restricciones agrupadas por impacto
| Grupo | IDs asociados |
|---|---|
| rendimiento y capacidad del flujo core | NFR-001, NFR-008 |
| reportes y disponibilidad operativa | NFR-002, NFR-003 |
| integridad comercial y control de acceso | NFR-004, NFR-005 |
| trazabilidad, auditoria y observabilidad | NFR-006, NFR-007 |
| entrega tecnica continua | NFR-009 |
| retencion, privacidad y regionalizacion | NFR-010, NFR-011 |

## Resumen por prioridad
| Prioridad | IDs |
|---|---|
| Must | NFR-001, NFR-003, NFR-004, NFR-005, NFR-006, NFR-007, NFR-010, NFR-011 |
| Should | NFR-002, NFR-008, NFR-009 |
| Could | N/A |

## Requisitos
### Must
- [NFR-001 - Tiempo de respuesta de APIs core](./nfr-001/)
- [NFR-003 - Disponibilidad del backend en horario operativo](./nfr-003/)
- [NFR-004 - Confiabilidad de disponibilidad comercial](./nfr-004/)
- [NFR-005 - Aislamiento por organizacion y perfil de acceso](./nfr-005/)
- [NFR-006 - Trazabilidad de cambios criticos](./nfr-006/)
- [NFR-007 - Observabilidad operacional minima](./nfr-007/)
- [NFR-010 - Retencion y borrado/anonimizacion de datos](./nfr-010/)
- [NFR-011 - Localizacion operativa y cumplimiento configurable por pais](./nfr-011/)

### Should
- [NFR-002 - Tiempo de generacion de reportes semanales](./nfr-002/)
- [NFR-008 - Escalamiento en picos de demanda](./nfr-008/)
- [NFR-009 - Calidad minima de entrega continua](./nfr-009/)
