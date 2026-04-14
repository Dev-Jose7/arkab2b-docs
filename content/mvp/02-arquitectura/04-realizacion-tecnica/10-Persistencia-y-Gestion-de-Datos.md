---
title: "Persistencia y gestion de datos"
linkTitle: "10. Persistencia y datos"
weight: 10
url: "/mvp/arquitectura/realizacion-tecnica/persistencia-y-gestion-de-datos/"
aliases:
  - "/mvp/arquitectura/arc42/persistencia-datos/"
---

## Proposito de la seccion
Definir como se organizan los datos del baseline, que tablas son criticas y
que reglas de ownership, consistencia y retencion aplican en runtime.

## Ownership de persistencia por servicio
| Servicio | Tablas o familias principales | Ownership |
|---|---|---|
| `identity-access-service` | `users`, `sessions`, `auth_audit`, `outbox_events`, `processed_events` | identidad, sesion y permisos |
| `directory-service` | `organization_profile`, `organization_address`, `organization_contact_point`, `organization_legal_profile`, `directory_audit`, `outbox_events` | verdad organizacional |
| `catalog-service` | `products`, `variants`, `prices`, `offers`, `variant_attributes`, `catalog_audits`, `outbox_events`, `processed_events` | catalogo vendible |
| `inventory-service` | `stock_items`, `stock_reservations`, `stock_movements`, `inventory_audit`, `idempotency_records`, `outbox_events`, `processed_events` | stock y reservas |
| `order-service` | `carts`, `cart_items`, `checkout_attempts`, `purchase_orders`, `order_lines`, `order_status_history`, `payment_records`, `idempotency_records`, `outbox_events` | ciclo comercial transaccional |
| `notification-service` | `notification_requests`, `notification_attempts`, `provider_callbacks`, `channel_policies`, `notification_templates`, `processed_events`, `outbox_events` | entrega y trazabilidad de avisos |
| `reporting-service` | `analytic_facts`, `sales_projections`, `replenishment_projections`, `operations_kpi_projections`, `weekly_report_executions`, `report_artifacts`, `consumer_checkpoints`, `processed_events`, `outbox_events` | lecturas derivadas y artefactos |

## Reglas de datos vigentes
- Toda base usa identificadores `UUID` como baseline oficial.
- Los seeds del sistema usan datos realistas y no nombres de laboratorio.
- Ningun servicio consulta tablas de otro servicio para resolver negocio.
- La consistencia fuerte solo se exige dentro del owner transaccional.
- La consistencia cross-service se cierra con contratos sync o async segun el caso.

## Persistencia auxiliar critica
| Mecanismo | Uso |
|---|---|
| `idempotency_records` | dedupe de mutaciones HTTP criticas |
| `outbox_events` | publicacion confiable de eventos |
| `processed_events` | dedupe de consumo asincrono |
| `consumer_checkpoints` | control operacional de consumers |
| `report_artifacts` | evidencia exportable de reporting |

## Inicializacion y baseline de datos
| Mecanismo | Estado actual |
|---|---|
| schema y seeds | SQL idempotente por servicio |
| activacion | `DatabaseInitializationConfig` por servicio |
| snapshot documental | `docs/DB_SNAPSHOT_SERVICIOS.md` generado desde base real |
| baseline comercial | organizaciones, catalogo, stock, notificaciones y KPI alineados a Arka |

## Persistencia en despliegue cloud
| Dependencia | Necesidad de persistencia |
|---|---|
| `postgres` | obligatoria |
| `kafka` | obligatoria para continuidad razonable del baseline |
| `redis` | recomendable segun uso de cache y soporte transitorio |
| artifacts/reportes | al menos sobre volumen o storage del host mientras no exista repositorio externo formal |

## Riesgos de dato que la arquitectura protege
- corrupcion de stock por falta de ownership;
- sobreventa por ausencia de reserva/validacion;
- perdida de eventos entre commit y publicacion;
- divergencia silenciosa entre hechos transaccionales y proyecciones;
- crecimiento no vigilado de auditorias, callbacks, processed events y artifacts.
