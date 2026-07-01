---
type: concept
status: active
source_count: 1
---

# Open questions

Preguntas que deben cerrarse antes de cotizacion final o implementacion.

## Moneda y pagos

- Confirmar si `$` significa USD para plan semanal y quincenal.
- Definir moneda base de reportes.
- Definir si habra conversion automatica entre C$ y USD.
- Definir tasa de cambio, redondeo y quien puede cambiarla.

## Recibos

- Definir numeracion de factura/recibo basico.
- Definir si factura/recibo basico necesita logo, firma, datos fiscales o texto legal.
- Definir si se imprimira, descargara PDF o solo se vera en pantalla.
- Confirmar que facturacion fiscal/electronica queda fuera del MVP.

## Clases y asistencia

- Confirmar si existen cupos por clase.
- Confirmar si alumnos reservan cupos o solo se registra asistencia.
- Confirmar si instructores tienen pagos por clase o solo control laboral.

## Inventario

- Confirmar si los liquidos se venden a alumnos, se consumen internamente o ambos.
- Definir si inventario maneja costo, precio, utilidad y stock minimo.
- Definir como se cobran deudas de inventario junto a membresias.
- Definir si cada venta de liquido genera factura/recibo basico individual.

## Gastos y caja

- Definir categorias finales de gastos.
- Definir si caja chica requiere arqueo por turno.
- Definir si la cuenta principal necesita conciliacion o solo registro manual.

## Notificaciones WhatsApp y dashboard

- Definir proveedor de WhatsApp: WhatsApp Business App/manual, Cloud API o proveedor externo.
- Definir si los recordatorios salen automaticos o pasan por revision.
- Definir quien paga y recarga costos variables de Meta/proveedor/mensajes.
- Definir si el dashboard debe calcular utilidad aproximada como ingresos menos gastos pagados o ingresos menos gastos registrados.
- Definir si saldos por cobrar combinan deudas de inventario, membresias vencidas y pagos pendientes.
- Definir metricas minimas de horarios: clases programadas, asistencia u ocupacion.

## Presupuesto

- Defender 600 USD porque WhatsApp es requisito obligatorio junto con dashboard, metricas, facturacion e inventario.
- Si se acepta 500 USD, limitar ajustes, automatizaciones externas, reporteria avanzada y automatizacion WhatsApp.

## Fuera del MVP cotizado

- Asistentes conversacionales para el dueno o clientes.
- Automatizacion conversacional de preguntas, respuestas o sugerencias.
