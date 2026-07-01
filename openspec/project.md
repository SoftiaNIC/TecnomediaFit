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

- Core tecnico inicial con NestJS, Supabase, Supabase CLI, RBAC y tipado fuerte.
- Membresias y pagos.
- Horarios y clases.
- Empleados, instructores y asistencia laboral.
- Inventario, venta de liquidos y creditos de alumnos.
- Gastos, caja chica y cuenta principal.
- Notificaciones WhatsApp y dashboards.

## Technical Direction

- NestJS sera el backend/API principal del MVP.
- Supabase sera la plataforma de datos y autenticacion.
- Supabase CLI sera el flujo para migraciones, generacion de tipos y validacion local de integraciones cuando inicie implementacion.
- Los tipos de base de datos deben generarse como `database.types.ts`.
- La integracion WhatsApp debe validarse contra datos, Auth/RBAC y tipos locales antes de despliegue.
- El codigo futuro debe organizarse feature-first por modulo de negocio.
- El desarrollo futuro debe usar tipado fuerte con TypeScript.

## Initial Users And RBAC

- 2 cuentas `cashier` para cajeros operativos.
- 1 cuenta `admin` para administracion operativa.
- 1 cuenta `superadmin` para control total.
- Los instructores se registran como empleados/instructores, pero no tienen login en el MVP salvo cambio posterior.

## Non-Negotiables

- No iniciar codigo productivo antes de cerrar el alcance minimo viable.
- Mantener la solucion proporcional al tamano del negocio.
- Separar claramente caja chica, cuenta principal, ingresos, gastos y deudas.
- Dejar asistentes conversacionales fuera del MVP cotizado.
- Incluir WhatsApp como canal obligatorio de notificaciones del MVP.
- Tratar canales adicionales y automatizaciones conversacionales como alcance controlado por fase.
- Restringir acciones criticas por RBAC: anulacion de facturas, ajustes de stock, cambios de rol y configuracion global.

## Spec Workflow

1. Revisar `openspec/project.md`, `wiki/index.md` y specs relevantes.
2. Crear o actualizar un cambio en `openspec/changes/<verb-led-id>/`.
3. Escribir requisitos con escenarios verificables.
4. Cerrar preguntas criticas antes de estimar o implementar.
5. Archivar o consolidar el cambio en `openspec/specs/` cuando el alcance sea aprobado.

## Initial Implementation Spec

- La spec inicial para proceder con codigo productivo es `openspec/specs/core-supabase-foundation/spec.md`.
- Esta spec define backend/API primero, Supabase local, migraciones, generacion de tipos, RBAC, feature-first y defaults de arranque.
- Cualquier implementacion inicial debe validarse contra esa spec antes de crear frontend o conectar proveedores externos.

## Open Questions

- Moneda oficial y reglas de conversion entre C$ y USD.
- Proveedor de WhatsApp y costo operativo de mensajes.
- Formato comercial requerido para factura/recibo basico.
- Reglas de asistencia de alumnos: cupos, reservas, check-in o solo registro administrativo.
- Cierre comercial final entre 500 USD y 600 USD.
