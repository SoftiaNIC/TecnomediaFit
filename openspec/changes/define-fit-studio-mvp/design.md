# Design Notes

## Architecture Direction

La recomendacion inicial es un monolito modular orientado a dominio. El volumen del negocio no justifica microservicios ni una arquitectura distribuida compleja.

## Logical Modules

- `memberships-payments`: planes, pagos, facturacion basica interna, divisas y deuda financiera.
- `schedules-classes`: clases, sesiones, duraciones, horarios y disponibilidad.
- `employees-attendance`: recepcionistas, instructores, turnos y entrada/salida.
- `inventory-credits`: liquidos, ventas, movimientos de inventario y creditos de alumnos.
- `expenses-cash`: gastos, imprevistos, caja chica y cuenta principal.
- `notifications-analytics`: recordatorios, cumpleanos y dashboards.

## Roles Iniciales

- Dueno: visibilidad total, dashboards, configuracion y aprobaciones.
- Recepcionista: registro diario de pagos, facturas/recibos basicos, alumnos, asistencia, venta de liquidos e inventario.
- Instructor: visibilidad de clases asignadas y asistencia relacionada.
- Alumno/cliente: recordatorios y consulta por canales no conversacionales dentro del MVP.

## Data Boundaries

- Los pagos y facturas/recibos basicos deben ser historicos y no modificarse silenciosamente.
- Los movimientos de inventario deben ser auditables.
- Los gastos deben diferenciar estado pendiente/pagado.
- Caja chica y cuenta principal deben registrarse como fondos separados.

## Integration Boundaries

- Las notificaciones WhatsApp deben quedar detras de una capa de proveedor; SMS y correo quedan como canales futuros opcionales.
- Asistentes conversacionales quedan fuera del MVP cotizado y deben tratarse como fase futura opcional.

## Risks

- La mezcla de C$ y USD afecta precios, reportes y facturas/recibos basicos.
- Notificaciones pueden duplicar alcance si se cotizan como automatizacion completa desde el inicio.
- Los dashboards necesitan definicion de metricas para no convertirse en reportes abiertos sin cierre.
