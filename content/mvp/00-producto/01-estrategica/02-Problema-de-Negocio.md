---
title: "Problema de Negocio"
linkTitle: "2. Problema de negocio"
weight: 2
url: "/mvp/producto/problema-de-negocio/"
---

## Proposito del archivo
Explicitar la tension de negocio que justifica el producto y que debe resolverse
antes de modelar dominio o arquitectura.

## Situacion actual
Arka atiende clientes B2B de alto volumen y hoy combina procesos manuales con
validaciones de stock no sincronizadas. La operacion comercial depende en exceso
de verificaciones fuera de sistema para confirmar disponibilidad, estado de
pedido y cambios relevantes.

## Fricciones principales
| Friccion | Quien la sufre | Impacto |
|---|---|---|
| validaciones manuales de disponibilidad | comprador B2B y operacion comercial | retrasa la conversion y eleva el costo operativo |
| stock no sincronizado con la promesa comercial | comprador, inventario y despacho | genera sobreventa y reprocesos |
| baja visibilidad del estado del pedido | comprador B2B y operacion Arka | aumenta consultas manuales y tiempos muertos |
| soporte manual para seguimiento y pagos | operacion comercial y financiera | reduce trazabilidad y dificulta auditoria |
| baja preparacion para crecimiento regional | negocio y operacion | limita expansion sin rehacer reglas o configuracion |

## Impacto del problema
- afecta conversion y recompra porque la compra digital no es suficientemente
  confiable;
- incrementa reprocesos en despacho y en correccion de pedidos;
- reduce la capacidad de seguimiento operativo con evidencia verificable;
- dificulta planificar abastecimiento y crecimiento regional con reglas claras.

## Por que vale la pena resolverlo
Resolver este problema permite convertir el canal digital B2B en una via util de
operacion y no solo en una capa de consulta. El producto debe disminuir la carga
manual del negocio, proteger la promesa comercial y preparar una base estable
para evolucion posterior.
