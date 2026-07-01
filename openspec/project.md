# Fit Studio Project

## Purpose

Fit Studio necesita una plataforma administrativa para operar un estudio deportivo pequeno antes de crecer a flujos mas complejos. Este repositorio documenta el alcance, la cotizacion y la arquitectura antes de escribir codigo.

## Current Phase

- Fase: discovery, cotizacion y arquitectura.
- Estado de codigo: no iniciado.
- Fuente de verdad funcional: `openspec/specs/` y cambios activos en `openspec/changes/`.
- Fuente de verdad de conocimiento: `raw/` como material inmutable y `wiki/` como sintesis mantenida por el agente.

## Business Context

- Estudio deportivo/gimnasio con clases grupales.
- Volumen esperado: 80 a 100 alumnos al mes.
- No hay venta general de productos.
- Inventario limitado a liquidos.
- Se requiere facturacion basica interna para membresias y venta de liquidos, no facturacion fiscal avanzada por ahora.
- Se manejan pagos en efectivo, tarjeta y transferencia.
- Se manejan dos divisas.

## Product Modules

- Membresias y pagos.
- Horarios y clases.
- Empleados, instructores y asistencia laboral.
- Inventario, venta de liquidos y creditos de alumnos.
- Gastos, caja chica y cuenta principal.
- Notificaciones WhatsApp y dashboards.

## Non-Negotiables

- No iniciar codigo productivo antes de cerrar el alcance minimo viable.
- Mantener la solucion proporcional al tamano del negocio.
- Separar claramente caja chica, cuenta principal, ingresos, gastos y deudas.
- Dejar asistentes conversacionales fuera del MVP cotizado.
- Incluir WhatsApp como canal obligatorio de notificaciones del MVP.
- Tratar canales adicionales y automatizaciones conversacionales como alcance controlado por fase.

## Spec Workflow

1. Revisar `openspec/project.md`, `wiki/index.md` y specs relevantes.
2. Crear o actualizar un cambio en `openspec/changes/<verb-led-id>/`.
3. Escribir requisitos con escenarios verificables.
4. Cerrar preguntas criticas antes de estimar o implementar.
5. Archivar o consolidar el cambio en `openspec/specs/` cuando el alcance sea aprobado.

## Open Questions

- Moneda oficial y reglas de conversion entre C$ y USD.
- Proveedor de WhatsApp y costo operativo de mensajes.
- Formato comercial requerido para factura/recibo basico.
- Reglas de asistencia de alumnos: cupos, reservas, check-in o solo registro administrativo.
