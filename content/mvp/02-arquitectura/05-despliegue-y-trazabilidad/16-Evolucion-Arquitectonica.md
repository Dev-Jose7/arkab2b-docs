---
title: "Evolucion arquitectonica"
linkTitle: "16. Evolucion arquitectonica"
weight: 16
url: "/mvp/arquitectura/despliegue-y-trazabilidad/evolucion-arquitectonica/"
aliases:
  - "/mvp/arquitectura/arc42/evolucion/"
---

## Proposito de la seccion
Dejar explicito que partes de la arquitectura ya estan consolidadas y que
lineas de evolucion siguen abiertas sin invalidar el baseline actual.

## Arquitectura consolidada hoy
| Area | Estado |
|---|---|
| separacion por servicios y ownership de datos | consolidada |
| bootstrap con `config-server` y `eureka-server` | consolidado |
| borde unico con `api-gateway` | consolidado |
| consistencia derivada con outbox + Kafka | consolidada |
| JWT propagado para integracion sync interna | consolidado |
| despliegue Compose local/cloud | consolidado para baseline razonable |

## Evoluciones previstas sin romper el baseline
| Linea | Sentido |
|---|---|
| observabilidad avanzada | centralizar metricas, dashboards y alertas operativas mas ricas |
| backups y restore formalizados | cerrar deuda operativa de continuidad |
| endurecimiento cloud | TLS, reverse proxy, storage de artifacts y politicas de firewall mas maduras |
| validacion contractual automatizada adicional | elevar confianza sobre integraciones sync y async |
| escalado selectivo | separar runtimes o replicas sin tocar contratos de negocio |

## Deudas arquitectonicas aceptadas
| ID | Deuda | Impacto |
|---|---|---|
| `DA-01` | no existe alta disponibilidad formal del plano tecnico | el baseline depende de un solo host razonable |
| `DA-02` | observabilidad sigue en nivel minimo operable, no en plataforma madura | mas diagnostico manual del deseable |
| `DA-03` | artifacts y backups aun no tienen estrategia final administrada | riesgo operacional a cerrar antes de endurecimiento productivo |
| `DA-04` | algunos endpoints agregados del backlog viven en adapters y servicios de lectura auxiliares | cubren historias sin rediseñar el dominio, pero requieren estabilizacion posterior |

## Regla de evolucion
Toda evolucion posterior debe preservar:
- ownership por servicio;
- contratos existentes o versionarlos explicitamente;
- seguridad basada en JWT y segmentacion de red;
- posibilidad de levantar el baseline completo con `Docker Compose`.
