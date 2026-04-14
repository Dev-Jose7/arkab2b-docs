---
title: "Calidad funcional"
linkTitle: "9. Calidad funcional"
weight: 9
url: "/mvp/calidad/validacion-del-sistema/calidad-funcional/"
---

## Proposito de la seccion
Definir que flujos funcionales deben comprobarse para aceptar el comportamiento
esperado del sistema.

## Flujos funcionales obligatorios
| Flujo | Evidencia minima |
|---|---|
| login, refresh, logout, autorizacion | pruebas IAM + Swagger manual |
| gestion organizacional basica | pruebas de directorio + guias manuales |
| catalogo vendible y variantes | pruebas de catalogo + E2E Hub |
| stock, ajuste y disponibilidad | pruebas de inventario + smoke/manual |
| carrito, checkout, pedido y ajuste | pruebas de order + light E2E + Swagger manual |
| notificacion por cambio relevante | pruebas de notification + consultas DB/logs |
| reportes y proyecciones semanales | pruebas de reporting + endpoints operativos |
| HU1..HU8 del backlog | guia `docs/GUIA_PRUEBAS_MANUALES_HU_BACKLOG.md` |

## Variaciones funcionales que no pueden quedar sin prueba
- paths exitosos y fallidos;
- permisos insuficientes;
- datos inexistentes o inconsistentes;
- idempotencia en mutaciones;
- uso de baseline realista con UUID y catalogo Arka.
