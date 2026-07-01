## ADDED Requirements

### Requirement: Payment plans must be explicit

The system shall support monthly, per-class, weekly and fifteen-day payment plans with explicit amount and currency.

#### Scenario: Weekly plan is registered

- Given the weekly plan is priced at 10 USD
- When it is configured
- Then the system shall store amount `10` and currency `USD`

### Requirement: Basic invoices must be generated for membership payments

The system shall generate a basic internal invoice or receipt for each confirmed membership payment.

#### Scenario: Payment is saved

- Given a membership payment has been confirmed
- When basic invoice generation runs
- Then an invoice number, date, amount, currency, method and student reference shall be available
