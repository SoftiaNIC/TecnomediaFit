---
spec_id: fit-studio-platform
status: draft
version: 0.3
source: raw/sources/2026-06-24-fit-studio-brief.md
---

# Fit Studio Platform

## Objective

Definir la primera version del sistema administrativo y operativo de Fit Studio sin iniciar codigo de producto.

## Context

Fit Studio opera como un estudio deportivo/gimnasio con clases grupales, membresias, caja operativa, empleados, inventario y venta de liquidos, gastos, facturacion basica interna, notificaciones WhatsApp obligatorias y dashboards.

## Capabilities

- `core-supabase-foundation`: base tecnica inicial para NestJS, Supabase, Supabase CLI, RBAC, tipado fuerte y desarrollo feature-first.
- `memberships-payments`: membresias, pagos, facturacion basica interna y divisas.
- `schedules-classes`: horarios, clases, sesiones y duraciones.
- `employees-attendance`: cajeros operativos, instructores registrados y control de entrada/salida.
- `inventory-credits`: inventario, venta de liquidos y creditos de alumnos.
- `expenses-cash`: gastos, imprevistos, caja chica y cuenta principal.
- `notifications-analytics`: notificaciones WhatsApp obligatorias y dashboards.

## Requirements

### Requirement: The platform shall be scoped as an administrative system

El sistema debe apoyar la operacion administrativa de Fit Studio y excluir venta general de productos.

#### Scenario: Product sales are requested

- Given Fit Studio has no general product sales
- When a feature request proposes ecommerce or a broad product catalog
- Then the request shall be treated as out of scope unless the user changes the business model

### Requirement: The platform shall support a small-studio operating volume

El sistema debe estar dimensionado para un negocio de aproximadamente 80 a 100 alumnos al mes.

#### Scenario: Architecture is evaluated

- Given the expected monthly student volume is 80 to 100
- When selecting architecture or modules
- Then the solution shall favor a modular monolith and simple operational workflows over distributed infrastructure

### Requirement: The platform shall preserve financial traceability

Los pagos, facturas basicas, gastos, creditos, movimientos de caja e inventario deben quedar trazables.

#### Scenario: A receipt or movement is corrected

- Given a financial or inventory record already exists
- When a correction is needed
- Then the system shall preserve the original record and register a correction or adjustment trail

### Requirement: The platform shall enforce initial RBAC

El sistema debe operar con 2 usuarios `cashier`, 1 usuario `admin` y 1 usuario `superadmin` en el MVP.

#### Scenario: A cashier attempts a restricted action

- Given a user has role `cashier`
- When the user attempts to change roles, adjust stock manually, delete history or modify global configuration
- Then the system shall reject the action or require an authorized `admin` or `superadmin`

### Requirement: The platform shall use the agreed technical direction

La implementacion futura debe resumirse como NestJS para backend/API, Supabase para datos/autenticacion, Supabase CLI para migraciones/tipos/validacion local de integraciones, `database.types.ts`, TypeScript con tipado fuerte y organizacion feature-first.

#### Scenario: Implementation work is planned

- Given product code has not started
- When implementation tasks are defined
- Then the tasks shall follow NestJS, Supabase, Supabase CLI for migrations, generated `database.types.ts`, local integration validation, strong typing and feature-first module boundaries
- And the first implementation shall use `core-supabase-foundation` as the initial spec

## Out Of Scope

- Codigo productivo en esta fase documental.
- Ecommerce o venta general de productos.
- Facturacion fiscal avanzada no confirmada.
- Canales externos adicionales a WhatsApp sin aprobacion.
- Asistentes conversacionales fuera del MVP cotizado.

## Open Questions

- Moneda oficial, tasa de cambio y redondeos.
- Proveedor de WhatsApp y modo de envio.
- Formato de factura/recibo basico.
- Si las clases tendran reservas/cupos o solo registro administrativo.
