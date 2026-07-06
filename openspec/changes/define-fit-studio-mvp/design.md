# Design Notes

## Architecture Direction

La recomendacion inicial es un monorepo modular orientado a dominio con resumen tecnico Turbo + SvelteKit + NestJS + Supabase. El volumen del negocio no justifica microservicios ni una arquitectura distribuida compleja.

## Technical Summary

- Turbo como monorepo.
- SvelteKit como frontend del MVP.
- NestJS como backend/API principal.
- Supabase como datos y autenticacion.
- Supabase CLI para migraciones, generacion de tipos y validacion local de integraciones cuando inicie implementacion.
- Tipos de base de datos generados como `database.types.ts`.
- TypeScript con tipado fuerte.
- Organizacion feature-first por modulo.

## Logical Modules

- `core-supabase-foundation`: base tecnica inicial para monorepo Turbo, SvelteKit shell, backend/API, Supabase local, migraciones, tipos, RBAC y limites de implementacion.
- `agent-harnessing-workflow`: orquestacion de agentes, modelos por rol, review, test y QA para desarrollo paralelo controlado.
- `memberships-payments`: planes, pagos, facturacion basica interna, divisas y deuda financiera.
- `schedules-classes`: clases, sesiones, duraciones, horarios y disponibilidad.
- `employees-attendance`: cajeros operativos, instructores registrados, turnos y entrada/salida.
- `inventory-credits`: liquidos, ventas, movimientos de inventario y creditos de alumnos.
- `expenses-cash`: gastos, imprevistos, caja chica y cuenta principal.
- `notifications-analytics`: recordatorios, cumpleanos y dashboards.

## RBAC Funcional

- `superadmin`: control total, usuarios, roles, auditoria, configuracion, metricas completas y acciones criticas.
- `admin`: operacion completa sin gestion absoluta de roles/superadmin; gestiona membresias, horarios, inventario, gastos, dashboard y WhatsApp.
- `cashier`: operacion diaria; registra pagos, emite facturas/recibos, vende liquidos, registra asistencia y prepara/envia recordatorios operativos.
- Usuarios iniciales: 2 `cashier`, 1 `admin`, 1 `superadmin`.
- Instructores: empleados/instructores registrados sin login en el MVP.

## Data Boundaries

- Los pagos y facturas/recibos basicos deben ser historicos y no modificarse silenciosamente.
- Los movimientos de inventario deben ser auditables.
- Los gastos deben diferenciar estado pendiente/pagado.
- Caja chica y cuenta principal deben registrarse como fondos separados.
- Acciones restringidas para `cashier`: borrar historicos, anular facturas sin autorizacion, ajustar stock manualmente, cambiar roles, modificar configuracion global y ver metricas completas sensibles.

## Integration Boundaries

- Las notificaciones WhatsApp deben quedar detras de una capa de proveedor; SMS y correo quedan como canales futuros opcionales.
- Asistentes conversacionales quedan fuera del MVP cotizado y deben tratarse como fase futura opcional.
- WhatsApp es integracion obligatoria del MVP para pagos, vencimientos y cumpleanos.
- Supabase CLI debe usarse para preparar ambiente local, aplicar migraciones, generar `database.types.ts` y validar flujos internos de integracion antes de conectar proveedor real.
- El proveedor WhatsApp queda pendiente, pero el flujo interno de recordatorios debe validarse localmente con datos, Auth/RBAC y tipos generados.

## Risks

- La mezcla de C$ y USD afecta precios, reportes y facturas/recibos basicos.
- Notificaciones pueden duplicar alcance si se cotizan como automatizacion completa desde el inicio.
- Los dashboards necesitan definicion de metricas para no convertirse en reportes abiertos sin cierre.
- Sin RBAC funcional estricto, cajeros podrian modificar datos financieros sensibles.
