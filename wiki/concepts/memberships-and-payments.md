---
type: concept
status: active
---

# Memberships and payments

El sistema debe soportar cobros por distintos esquemas:

- Mensualidad: 1100 C$.
- Pago por clase: 100 C$.
- Plan de 1 semana: 10$.
- Plan de 15 dias: 15$.

## Notas

- La captura original mezcla C$ y $; la moneda y equivalencia deben confirmarse antes de cerrar la cotizacion final.
- Se requiere factura/recibo basico interno por cada pago de membresia.
- Los pagos pueden realizarse en efectivo, tarjeta o transferencia.

## Riesgos para cotizacion

- La conversion de divisas puede ser simple o compleja segun reglas de tasa, redondeo e historico.
- Facturas/recibos impresos/PDF con numeracion formal aumentan alcance frente a comprobantes simples en pantalla.
- La facturacion fiscal/electronica queda fuera del MVP salvo confirmacion posterior.

## Spec relacionada

- [Memberships and payments](../../openspec/specs/memberships-payments/spec.md)
