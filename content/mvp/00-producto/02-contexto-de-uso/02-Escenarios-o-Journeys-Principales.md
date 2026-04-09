---
title: "Escenarios o Journeys Principales"
linkTitle: "2. Escenarios o journeys principales"
weight: 2
url: "/mvp/producto/escenarios-journeys-principales/"
---

## Proposito del archivo
Describir los recorridos principales por los que los actores obtienen valor del
producto en el ciclo `MVP`.

## Journeys principales
| Journey | Actor principal | Disparador | Resultado buscado |
|---|---|---|---|
| Compra por volumen con validacion de disponibilidad | Comprador B2B | necesidad de confirmar una compra desde carrito | crear pedido sin sobreventa ni validaciones manuales informales |
| Ajuste de pedido antes de confirmacion | Comprador B2B | cambio sobre lineas antes del cierre permitido | corregir el pedido sin romper consistencia de disponibilidad |
| Seguimiento de estado del pedido | Comprador B2B / Operacion Arka | consulta posterior a la compra o cambio de estado | conocer avance del pedido con estados contractuales consistentes |
| Recuperacion de oportunidad por carrito abandonado | Operacion comercial | carrito sin conversion dentro de la ventana definida | reactivar una compra potencial sin saturar al cliente |
| Seguimiento semanal de ventas y abastecimiento | Ventas / Inventario | cierre semanal de operacion | obtener reportes accionables para seguimiento comercial y reposicion |

## Secuencia operacional resumida
| Escenario | Secuencia resumida |
|---|---|
| Compra B2B | explorar oferta -> armar carrito -> validar disponibilidad -> crear pedido |
| Ajuste de pedido | solicitar cambio -> validar estado permitido -> recalcular disponibilidad -> guardar nueva version del pedido |
| Seguimiento | detectar cambio de estado -> notificar o consultar -> revisar estado contractual visible |
| Carrito abandonado | detectar inactividad -> listar oportunidad -> decidir recordatorio -> registrar intento |
| Reportes semanales | cerrar periodo -> consolidar datos -> publicar reporte -> usar reporte en operacion |

## Relacion con la definicion funcional
Cada journey encuentra su aterrizaje formal en las capacidades funcionales y en
las restricciones del producto. Esta seccion describe uso y valor; no define aun
la solucion semantica del dominio.
