---
title: "Topologia de entornos"
linkTitle: "6. Topologia de entornos"
weight: 6
url: "/mvp/operacion/ejecucion-del-sistema/topologia-de-entornos/"
aliases:
  - "/mvp/operacion/modelo-ambientes/"
---

## Proposito de la seccion
Definir en que entornos existe hoy el sistema y como se distribuye en cada uno.

## Entornos vigentes
| Entorno | Proposito | Forma |
|---|---|---|
| `local-integrated` | desarrollo y validacion integrada | una maquina con todos los contenedores |
| `cloud-compose` | despliegue remoto razonable | host Linux/Droplet con compose base + cloud |
| `future-managed` | evolucion posterior | mantiene la misma topologia logica |

## Diferencia operativa relevante
| Tema | Local | Cloud compose |
|---|---|---|
| puertos internos | visibles al host de desarrollo | privados o bound a `127.0.0.1` |
| gateway | `localhost:8080` | IP o dominio del host |
| secretos | directorios locales y archivos del repo ignorados | directorios montados del host |
| observacion | consola local + docker logs | consola remota + docker logs + runbooks |
