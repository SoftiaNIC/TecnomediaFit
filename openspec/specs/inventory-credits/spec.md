---
spec_id: inventory-credits
status: draft
version: 0.2
source: raw/sources/2026-06-24-fit-studio-brief.md
---

# Inventory And Credits

## Objective

Gestionar inventario, venta de liquidos y creditos/deudas de alumnos asociadas a consumo de inventario.

## Requirements

### Requirement: The system shall limit inventory to liquid products

El inventario inicial solo debe contemplar liquidos.

#### Scenario: A non-liquid product is added

- Given the system is configured for liquid inventory only
- When a user tries to add a non-liquid product
- Then the system shall reject it or require an administrator to change the inventory scope

### Requirement: The system shall track inventory movements

Entradas y salidas deben quedar registradas para conocer existencias.

#### Scenario: Liquid product is sold or consumed on credit

- Given a liquid product has stock
- When a student consumes it and leaves a pending debt
- Then the system shall reduce stock and create a student credit/debt record

### Requirement: The system shall support basic liquid sales

El sistema debe permitir venta de liquidos con factura/recibo basico interno.

#### Scenario: A liquid product is sold

- Given a liquid product has stock and sale price
- When the receptionist records the sale
- Then the system shall reduce stock, register income and generate a basic internal invoice or receipt

### Requirement: The system shall show pending student debts

Los creditos de alumnos deben consultarse por alumno y por estado.

#### Scenario: A student pays an inventory debt

- Given a student has a pending inventory debt
- When the receptionist records payment
- Then the debt shall be marked paid and linked to the payment record

## Open Questions

- Confirmar si los liquidos se venden, se consumen internamente o ambos.
- Definir si inventario maneja costo, precio o solo cantidad.
- Definir si habra alertas de stock bajo.
- Definir formato de factura/recibo para venta de liquidos.
