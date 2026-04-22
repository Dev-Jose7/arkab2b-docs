---
title: "Mantenimiento operativo"
linkTitle: "25. Mantenimiento operativo"
weight: 25
url: "/mvp/operacion/soporte-y-continuidad/mantenimiento-operativo/"
---

## Proposito de la seccion
Formalizar tareas recurrentes necesarias para sostener el baseline.

## Tareas recurrentes minimas
- revisar salud y registro de servicios;
- revisar crecimiento de tablas `outbox`, `processed_events`, auditorias, callbacks y artifacts;
- revisar lag de consumers y checkpoints;
- validar llaves JWT, secretos y configuracion cloud;
- regenerar o verificar seeds/snapshots cuando cambie el baseline de datos;
- ejecutar smoke despues de cambios relevantes de infraestructura o despliegue.
