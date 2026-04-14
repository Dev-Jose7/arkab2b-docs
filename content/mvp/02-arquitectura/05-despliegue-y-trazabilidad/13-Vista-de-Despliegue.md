---
title: "Vista de despliegue"
linkTitle: "13. Vista de despliegue"
weight: 13
url: "/mvp/arquitectura/despliegue-y-trazabilidad/vista-de-despliegue/"
aliases:
  - "/mvp/arquitectura/arc42/vista-despliegue/"
---

## Proposito de la seccion
Definir la topologia minima de despliegue y los entornos realmente soportados
por el baseline actual del sistema.

## Entornos reales del baseline
| Entorno | Objetivo |
|---|---|
| `local-integrated` | desarrollo, smoke y validacion integrada en una sola maquina |
| `cloud-compose` | despliegue razonable en host Linux remoto usando `Docker Compose` |
| `future-managed` | evolucion posterior sin cambiar la topologia logica documentada |

## Topologia minima en runtime
```mermaid
flowchart TB
  USERS["Compradores / Operacion / Admin"] --> EDGE["api-gateway :8080"]

  subgraph APP["Plano de aplicacion privado"]
    CONFIG["config-server"]
    EUREKA["eureka-server"]
    IAM["identity-access-service"]
    DIR["directory-service"]
    CAT["catalog-service"]
    INV["inventory-service"]
    ORD["order-service"]
    NOTI["notification-service"]
    REP["reporting-service"]
  end

  subgraph DATA["Plano stateful"]
    PG[("Postgres")]
    REDIS[("Redis")]
    KAFKA[("Kafka")]
  end

  subgraph EXT["Dependencias externas"]
    NPROV["Proveedor de notificaciones"]
    SECRETS["Llaves y secretos montados por host"]
  end

  EDGE --> IAM
  EDGE --> DIR
  EDGE --> CAT
  EDGE --> INV
  EDGE --> ORD
  EDGE --> NOTI
  EDGE --> REP

  CONFIG --> IAM
  CONFIG --> DIR
  CONFIG --> CAT
  CONFIG --> INV
  CONFIG --> ORD
  CONFIG --> NOTI
  CONFIG --> REP

  EUREKA --> EDGE
  EUREKA --> IAM
  EUREKA --> DIR
  EUREKA --> CAT
  EUREKA --> INV
  EUREKA --> ORD
  EUREKA --> NOTI
  EUREKA --> REP

  IAM --> PG
  DIR --> PG
  CAT --> PG
  INV --> PG
  ORD --> PG
  NOTI --> PG
  REP --> PG
  EDGE --> REDIS
  DIR --> KAFKA
  CAT --> KAFKA
  INV --> KAFKA
  ORD --> KAFKA
  KAFKA --> NOTI
  KAFKA --> REP
  NOTI --> NPROV
  SECRETS --> EDGE
  SECRETS --> IAM
```

## Artefactos y unidades de despliegue
| Unidad | Tipo |
|---|---|
| `bootJar` por servicio Java | artefacto ejecutable |
| `docker-compose.yml` | topologia base local/cloud |
| `docker-compose.cloud.yml` | endurecimiento cloud y bindings privados/publicos |
| scripts `start-*` / `stop-*` | automatizacion de arranque y parada |
| `platform/stack/.env.cloud.example` | contrato de configuracion cloud |

## Reglas oficiales de exposicion
- Solo `api-gateway` debe publicar puerto al exterior en cloud.
- `config-server`, `eureka-server`, servicios de negocio, `postgres`, `redis` y `kafka` deben permanecer privados.
- Los hubs HTML operativos se sirven desde `api-gateway` para reutilizar el mismo borde.

## Decision de plataforma vigente
| Escenario | Decision |
|---|---|
| baseline cloud actual | `Droplet Linux + Docker Compose` |
| variante soportada | `DigitalOcean + Coolify` solo si preserva el compose aprobado |
| emulacion local | stack integrado local via scripts oficiales |

## Resultado esperado
El sistema debe poder moverse desde local a un host Linux remoto sin cambiar la
arquitectura logica, solo endureciendo configuracion, secretos, puertos y
persistencia.
