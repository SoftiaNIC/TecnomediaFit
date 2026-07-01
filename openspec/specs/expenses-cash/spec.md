---
spec_id: expenses-cash
status: draft
version: 0.2
source: raw/sources/2026-06-24-fit-studio-brief.md
---

# Expenses And Cash

## Objective

Registrar gastos fijos, variables, impuestos, imprevistos y separar caja chica de cuenta principal.

## Requirements

### Requirement: The system shall classify expenses

Los gastos deben clasificarse como fijos, variables, impuestos, limpieza, luz, alquiler u otros/imprevistos.

#### Scenario: A variable electricity expense is recorded

- Given electricity is a variable cost
- When the user records the monthly electricity expense
- Then the system shall store it as variable and preserve amount, currency, date and payment status

### Requirement: The system shall track pending expenses

Debe existir una tabla o vista de gastos pendientes.

#### Scenario: Rent is not paid yet

- Given a rent expense is created as pending
- When the owner reviews pending expenses
- Then the rent item shall appear with due date, amount and category

### Requirement: The system shall distinguish petty cash from main account

Movimientos de caja chica y cuenta principal deben registrarse por separado.

#### Scenario: Cleaning products are paid from petty cash

- Given the expense is paid using petty cash
- When the payment is recorded
- Then the system shall reduce petty cash balance and link the expense to that fund

### Requirement: The system shall restrict sensitive financial actions by role

Los cajeros pueden registrar movimientos permitidos, pero no pueden gestionar configuracion global de caja ni ver metricas financieras sensibles completas.

#### Scenario: A cashier attempts to change fund configuration

- Given petty cash and main account are configured
- When a user with role `cashier` attempts to change fund settings
- Then the system shall reject the action or require `admin` or `superadmin` authorization

## Open Questions

- Definir si se requiere conciliacion bancaria.
- Definir si caja chica tendra arqueo por turno.
- Definir categorias finales de gastos.
