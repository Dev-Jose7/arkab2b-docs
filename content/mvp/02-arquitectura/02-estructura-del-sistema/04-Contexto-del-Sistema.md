---
title: "Contexto del sistema"
linkTitle: "4. Contexto del sistema"
weight: 4
url: "/mvp/arquitectura/estructura-del-sistema/contexto-del-sistema/"
aliases:
  - "/mvp/arquitectura/arc42/contexto/"
---

## Proposito de la seccion
Mostrar el sistema ArkaB2B como limite operativo completo: actores, servicios,
dependencias externas y superficies de entrada.

## Vista de contexto
```mermaid
flowchart LR
  BUYER["Comprador B2B"] --> GW["API Gateway"]
  OPS["Operacion Arka"] --> GW
  ADMIN["Administrador Arka"] --> GW

  GW --> IAM["identity-access-service"]
  GW --> DIR["directory-service"]
  GW --> CAT["catalog-service"]
  GW --> INV["inventory-service"]
  GW --> ORD["order-service"]
  GW --> NOTI["notification-service"]
  GW --> REP["reporting-service"]

  CONF["config-server"] --> GW
  CONF --> IAM
  CONF --> DIR
  CONF --> CAT
  CONF --> INV
  CONF --> ORD
  CONF --> NOTI
  CONF --> REP

  EUREKA["eureka-server"] --> GW
  EUREKA --> IAM
  EUREKA --> DIR
  EUREKA --> CAT
  EUREKA --> INV
  EUREKA --> ORD
  EUREKA --> NOTI
  EUREKA --> REP

  KAFKA[("Kafka")] --- NOTI
  KAFKA --- REP
  KAFKA --- DIR
  KAFKA --- CAT
  KAFKA --- INV
  KAFKA --- ORD
  NPROV["Proveedor de notificaciones"] <---> NOTI
```

## Actores y relacion con el sistema
| Actor | Relacion principal |
|---|---|
| comprador B2B | autentica, consulta catalogo, gestiona carrito y crea pedidos |
| operacion Arka | ajusta stock, actualiza estados, revisa notificaciones y reportes |
| administrador Arka | gestiona usuarios, organizaciones, reglas y baseline operativo |
| proveedor de notificaciones | entrega callbacks y resultados de envio |
| operador de plataforma | levanta el stack, inyecta secretos, revisa salud y ejecuta runbooks |

## Limite oficial del sistema
Dentro del sistema se consideran parte del baseline ejecutable:
- servicios Java del repositorio;
- infraestructura minima `postgres`, `redis`, `kafka`;
- `config-server`, `eureka-server` y `api-gateway`;
- scripts oficiales de arranque local y cloud;
- activos operativos y hubs Swagger/E2E servidos por `api-gateway`.

Quedan fuera del limite de implementacion propia:
- proveedor externo de notificaciones;
- infraestructura del host cloud;
- firewall, balanceadores y storage administrados por el operador.

## Superficies de entrada
| Superficie | Uso |
|---|---|
| `api-gateway` | unica entrada HTTP publica del baseline |
| `config-server` | bootstrap interno de configuracion |
| `eureka-server` | discovery interno |
| `kafka` | intercambio asincrono interno |
| `postgres` y `redis` | soporte stateful privado |

## Regla de borde
Toda entrada interactiva o de herramienta manual oficial se realiza via
`api-gateway`. Incluso los hubs HTML de Swagger y E2E se sirven desde ese borde
para no abrir puertos internos en despliegue cloud.
