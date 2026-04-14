---
title: "Configuracion y secretos"
linkTitle: "8. Configuracion y secretos"
weight: 8
url: "/mvp/operacion/ejecucion-del-sistema/configuracion-y-secretos/"
aliases:
  - "/mvp/operacion/gestion-configuracion-secretos/"
---

## Proposito de la seccion
Formalizar como se configura el sistema y como se inyectan valores sensibles.

## Fuentes de configuracion
| Fuente | Rol |
|---|---|
| `config-server` + `platform/config-repo` | configuracion distribuida por servicio/perfil |
| variables de entorno | override por ambiente |
| `.env.cloud` | contrato operativo del despliegue cloud |
| directorios de secretos montados | llaves JWT, credenciales y materiales sensibles |

## Secretos obligatorios
- llaves privadas/publicas JWT/JWKS para IAM;
- credenciales de base de datos;
- credenciales del provider de notificaciones cuando aplique;
- secretos de cloud declarados en `.env.cloud` o entorno equivalente.

## Regla vigente de seguridad
No existe ya un bloque de secretos para tokens tecnicos separados porque el modelo
actual usa JWT propagado en HTTP interno y contexto `INTERNAL_ACTOR` para
procesos no interactivos.

## Lo que nunca debe vivir en el repositorio
- `.env.cloud` reales;
- directorios de secretos montados;
- llaves privadas;
- credenciales efectivas de DB, provider o cloud.
