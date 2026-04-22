---
title: "Backup, restore y retencion"
linkTitle: "23. Backup, restore y retencion"
weight: 23
url: "/mvp/operacion/soporte-y-continuidad/backup-restore-y-retencion/"
---

## Proposito de la seccion
Definir el estado actual y las necesidades minimas de continuidad de datos.

## Estado actual
El baseline ya exige persistencia real de `postgres` y `kafka` en cloud, pero no
cuenta todavia con un programa completo y automatizado de backup/restore
certificado dentro del repositorio.

## Retenciones que importan
| Dato | Necesidad |
|---|---|
| bases transaccionales | respaldar antes de cambios de riesgo o despliegues importantes |
| artifacts y reportes | conservar segun necesidad operativa y capacidad del host |
| auditorias, callbacks, processed events | controlar crecimiento y depuracion segura |

## Regla vigente
No se declara operacion madura sin una estrategia externa o del host para
respaldar `postgres` y restaurarlo cuando sea necesario.
