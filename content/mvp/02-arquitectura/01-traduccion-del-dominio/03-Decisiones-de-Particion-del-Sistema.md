---
title: "Decisiones de particion del sistema"
linkTitle: "3. Decisiones de particion"
weight: 3
url: "/mvp/arquitectura/traduccion-del-dominio/decisiones-de-particion-del-sistema/"
aliases:
  - "/mvp/arquitectura/arc42/decisiones-particion/"
---

## Proposito de la seccion
Cerrar como el dominio vigente se materializa en servicios, componentes
transversales y fronteras tecnicas sin reescribir el modelo del negocio.

## Criterios oficiales de particion
| Criterio | Decision vigente |
|---|---|
| `bounded context` de negocio con reglas y datos propios | se implementa como servicio independiente con base de datos propia |
| capacidad transversal tecnica sin ownership de negocio | se implementa como servicio o componente transversal reutilizable |
| flujo distribuido con consistencia eventual aceptable | se resuelve con eventos, outbox y consumo asincrono |
| necesidad de consulta o validacion inmediata | se resuelve con contrato HTTP owner-to-owner |
| necesidad de borde publico unico | se centraliza en `api-gateway` |

## Particion del sistema resultante
| Tipo | Unidades |
|---|---|
| Contextos de negocio | `directory-service`, `catalog-service`, `inventory-service`, `order-service`, `notification-service`, `reporting-service` |
| Servicio tecnico transversal | `identity-access-service` |
| Infraestructura de plataforma del baseline | `config-server`, `eureka-server`, `api-gateway`, `postgres`, `redis`, `kafka` |
| Fuera del repo pero dentro del runtime | proveedor de notificaciones, host remoto `Docker Compose`, almacenamiento del operador |

## Decisiones de agrupacion explicitadas
| Decision | Razon |
|---|---|
| `identity-access-service` vive en el mismo repositorio pero no se trata como contexto de negocio | resuelve autenticacion, sesion, JWT, permisos y auditoria de acceso para todo el sistema |
| `notification-service` y `reporting-service` permanecen separados del `order-service` | ambos consumen hechos distribuidos y no deben acoplar el ciclo comercial mutante |
| `config-server`, `eureka-server` y `api-gateway` se documentan como plano tecnico y no como dominio | su responsabilidad es bootstrap, discovery y edge routing |
| cada servicio conserva persistencia privada | evita coupling estructural y obliga integracion por contrato |

## Reglas de frontera
- Ningun servicio de negocio lee tablas de otro servicio.
- La verdad organizacional pertenece a `directory-service`.
- La autenticacion y emision de JWT pertenecen a `identity-access-service`.
- La verdad de producto, variante, precio y oferta pertenece a `catalog-service`.
- La verdad de stock, reserva y movimiento pertenece a `inventory-service`.
- La verdad de carrito, checkout y pedido pertenece a `order-service`.
- `notification-service` y `reporting-service` operan como contextos derivados por eventos.

## Decisiones tecnicas asociadas a la particion
| Tema | Decision vigente |
|---|---|
| Identidad de negocio | `organizationId` es el contexto organizacional propagado en JWT, requests y eventos |
| Seguridad sync interna | no existe emision de token tecnico separado; se propaga el mismo bearer JWT validado en borde |
| Seguridad async y scheduler | se usa contexto interno de actor (`INTERNAL_ACTOR`) cuando no existe usuario interactivo |
| Integracion principal | HTTP reactivo + eventos Kafka con envelope comun |
| Despliegue objetivo del baseline | `Docker Compose` local y `Docker Compose` cloud para DigitalOcean |

## Antidecisiones activas
- No se fusionan `catalog`, `inventory` y `order` en un monolito funcional.
- No se expone `config-server`, `eureka-server`, bases de datos ni servicios internos al exterior.
- No se introduce un bus de comandos ni orquestador externo distinto del dominio vigente.
- No se reintroduce el modelo retirado de tokens tecnicos separados por servicio.

## Resultado esperado
La particion vigente mantiene fidelidad al dominio, permite despliegue razonable
con `Docker Compose` y conserva separacion suficiente para evolucionar sin romper
los limites ya consolidados.
