---
title: "Gates de calidad"
linkTitle: "14. Gates de calidad"
weight: 14
url: "/mvp/calidad/evidencia-y-control/gates-de-calidad/"
aliases:
  - "/mvp/calidad/puertas-calidad/"
---

## Proposito de la seccion
Fijar las condiciones minimas que bloquean o permiten aceptar una baseline.

## Gates vigentes
| Gate | Exigencia minima |
|---|---|
| `GQ-01` codigo viable | compila y pasa pruebas relevantes de los servicios tocados |
| `GQ-02` integracion minima | stack integrado levanta y smoke base pasa |
| `GQ-03` seguridad base | JWT, permisos y exposure cloud correcta |
| `GQ-04` datos y guias | seeds, snapshot y guias manuales coherentes |
| `GQ-05` evidencia | existe evidencia suficiente para sostener la decision |

## Que bloquea automaticamente
- fallo de compilacion o test critico;
- rutas del gateway rotas para el flujo principal;
- pedido no ejecutable por incompatibilidad sync interna;
- degradacion async sin trazabilidad minima;
- secretos hardcodeados o servicios internos expuestos al exterior.
