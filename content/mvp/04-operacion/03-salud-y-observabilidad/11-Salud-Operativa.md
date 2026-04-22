---
title: "Salud operativa"
linkTitle: "11. Salud operativa"
weight: 11
url: "/mvp/operacion/salud-y-observabilidad/salud-operativa/"
---

## Proposito de la seccion
Definir que significa que el sistema este vivo, listo o degradado.

## Señales oficiales
| Señal | Uso |
|---|---|
| liveness | confirma que el proceso sigue arriba |
| readiness | confirma que el servicio puede aceptar trafico util |
| startup | ayuda a diferenciar bootstrap lento de fallo temprano |
| registro Eureka | confirma presencia del servicio en discovery |
| smoke | confirma cooperacion basica del stack |

## Dependencias que afectan readiness
- configuracion cargada desde `config-server`;
- conectividad a base de datos o infraestructura stateful relevante;
- registro y resolucion por discovery cuando el servicio lo requiere;
- llaves JWT presentes en servicios de seguridad.
