# ArkaB2B - Repositorio Documental Oficial

Este repositorio contiene la **documentacion base oficial** de ArkaB2B para disenar, implementar, verificar y operar el sistema.  
No contiene el codigo fuente de los microservicios: su funcion es actuar como **fuente de verdad documental** para la construccion del backend.

## Estado actual del baseline

- **Lifecycle actual:** `mvp`
- **Version documental del baseline:** `0.1.1`
- **Estado del baseline:** **cerrado y listo para implementacion**

Este baseline documenta de forma integrada producto, dominio, arquitectura, calidad y operacion para un backend B2B multi-tenant.

## Alcance funcional del sistema (MVP)

El alcance vigente cubre catalogo, variantes, stock, reservas, carrito, checkout, pedidos, pago manual, notificaciones no bloqueantes y reporting derivado, con readiness regional para Colombia, Ecuador, Peru y Chile.  
Tambien incluye controles base de identidad y acceso por organizacion/rol para operacion multi-tenant.

## Organizacion de la documentacion

Toda la documentacion vigente esta en `content/mvp/` y se organiza en cinco pilares:

- `00-producto`: alcance, FR/NFR, glosario y trazabilidad de negocio.
- `01-dominio`: bounded contexts, lenguaje ubicuo, reglas e invariantes, contratos semanticos y eventos.
- `02-arquitectura`: decisiones tecnicas, vistas globales, contratos/datos/seguridad/rendimiento por servicio.
- `03-calidad`: estrategia de pruebas, mapeo FR/NFR, compuertas, cobertura, evidencia y certificacion minima.
- `04-operacion`: ambientes, releases/promocion, observabilidad, SLI/SLO, runbooks, continuidad y seguridad operacional.

## Relacion entre lifecycle y version

- `mvp` identifica la etapa del producto.
- `0.1.1` identifica la version documental del baseline dentro de esa etapa.

No deben confundirse con versiones de runtime o versionado de artefactos de despliegue.

## Reproducibilidad tecnica y baseline tecnico

La documentacion del baseline incorpora empaquetado reproducible por servicio e inicio reproducible de stacks de desarrollo/integracion (incluyendo Docker y `docker compose`) como parte de la definicion tecnica.  
Este repositorio sigue siendo documental: especifica que debe implementarse y como validarlo, pero no es el runtime productivo del sistema.

## Como usar este repositorio

Este repositorio se usa para:

- onboarding tecnico de equipo y revisores;
- guiar implementacion de servicios y contratos sin abrir decisiones fuera de baseline;
- guiar diseno y ejecucion de pruebas;
- guiar criterios operativos y respuesta ante incidentes;
- alinear trabajo asistido por copilotos con una unica verdad documental.

## Implementacion asistida por copiloto

El baseline actual esta preparado para implementacion asistida por copilotos (por ejemplo Codex, Windsurf o Kiro) con riesgo bajo de deriva, siempre que consuman `content/mvp/**` como fuente de verdad.  
Los copilotos no deben inventar capacidades, reglas ni contratos fuera de lo documentado en este repositorio.

## Frontend documental (Hugo)

El sitio documental se renderiza con **Hugo** y **hugo-theme-relearn**.

Comandos habituales:

```bash
hugo server
```

```bash
hugo
```

## Declaracion de cierre del baseline

El baseline documental `mvp` version `0.1.1` se considera **cerrado y listo para implementacion** del sistema ArkaB2B conforme a los cinco pilares documentados.
