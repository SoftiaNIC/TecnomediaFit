---
spec_id: memberships-payments
status: draft
version: 0.2
source: raw/sources/2026-06-24-fit-studio-brief.md
---

# Memberships And Payments

## Objective

Gestionar planes, pagos, facturacion basica interna, metodos de pago y manejo de dos divisas para Fit Studio.

## Requirements

### Requirement: The system shall support the initial payment plans

El sistema debe registrar los planes conocidos: mensualidad, pago por clase, plan semanal y plan quincenal.

#### Scenario: A receptionist records a monthly payment

- Given an active student chooses the monthly plan
- When the receptionist records a payment of 1100 C$
- Then the system shall create a payment record and associate it with the student's membership period

#### Scenario: A student pays for one class

- Given a student does not use a longer plan
- When the receptionist records a payment of 100 C$
- Then the system shall register a single-class payment

### Requirement: The system shall support cash, card and transfer payments

Cada pago debe indicar metodo de pago.

#### Scenario: A transfer payment is recorded

- Given a student pays by transfer
- When the receptionist registers the payment
- Then the system shall store the method as transfer and allow a reference number when available

### Requirement: The system shall generate basic internal invoices

El sistema debe emitir factura/recibo basico interno para pagos de membresias, sin asumir facturacion fiscal avanzada o electronica.

#### Scenario: Payment is confirmed

- Given a payment is saved
- When the basic invoice is generated
- Then it shall include student, concept, amount, currency, method, date and invoice number

### Requirement: The system shall handle two currencies

Los importes deben guardar moneda y evitar conversiones implicitas no configuradas.

#### Scenario: A weekly plan is paid in USD

- Given the weekly plan price is listed as 10 USD
- When a receptionist records the payment
- Then the system shall store the amount and currency explicitly

## Open Questions

- Confirmar si `$` significa USD.
- Definir si el sistema debe convertir automaticamente entre C$ y USD.
- Definir politica de tasa de cambio y redondeo.
- Definir formato visual y numeracion de factura basica interna.
