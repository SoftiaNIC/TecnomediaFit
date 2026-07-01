---
spec_id: fit-studio-platform
status: draft
version: 0.2
source: raw/sources/2026-06-24-fit-studio-brief.md
---

# Fit Studio Platform

## Objective

Definir la primera version del sistema administrativo y operativo de Fit Studio sin iniciar codigo de producto.

## Context

Fit Studio opera como un estudio deportivo/gimnasio con clases grupales, membresias, recepcion, empleados, inventario y venta de liquidos, gastos, facturacion basica interna, notificaciones basicas y dashboards.

## Capabilities

- `memberships-payments`: membresias, pagos, facturacion basica interna y divisas.
- `schedules-classes`: horarios, clases, sesiones y duraciones.
- `employees-attendance`: instructores, recepcionistas y control de entrada/salida.
- `inventory-credits`: inventario, venta de liquidos y creditos de alumnos.
- `expenses-cash`: gastos, imprevistos, caja chica y cuenta principal.
- `notifications-analytics`: notificaciones basicas y dashboards.

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

## Out Of Scope

- Codigo productivo en esta fase documental.
- Ecommerce o venta general de productos.
- Facturacion fiscal avanzada no confirmada.
- Automatizaciones externas sin canal aprobado.
- Asistentes conversacionales fuera del MVP cotizado.

## Open Questions

- Moneda oficial, tasa de cambio y redondeos.
- Canal de notificaciones.
- Formato de factura/recibo basico.
- Roles y permisos finales.
- Si las clases tendran reservas/cupos o solo registro administrativo.
