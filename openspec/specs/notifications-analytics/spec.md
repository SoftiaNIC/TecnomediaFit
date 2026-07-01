---
spec_id: notifications-analytics
status: draft
version: 0.6
source: raw/sources/2026-06-24-fit-studio-brief.md
---

# Notifications And Analytics

## Objective

Proveer metricas esenciales, recordatorios via WhatsApp, notificaciones de cumpleanos, avisos operativos y dashboards centrados en membresias, finanzas, liquidos y horarios.

## Requirements

### Requirement: The system shall notify student birthdays

El sistema debe mostrar cumpleaneros del dia y del mes.

#### Scenario: It is a student's birthday

- Given a student has a birth date matching the current date
- When an authorized user opens notifications
- Then the system shall show the student in today's birthday list

### Requirement: The system shall support payment reminders

El sistema debe preparar o enviar recordatorios via WhatsApp sobre pagos proximos, vencidos o pendientes.

#### Scenario: A membership is about to expire

- Given a student's membership period is near its end
- When reminders are generated
- Then the system shall include the student in WhatsApp payment reminder notifications

### Requirement: The system shall support WhatsApp birthday notifications

El sistema debe preparar o enviar mensajes de cumpleanos via WhatsApp.

#### Scenario: Monthly birthdays are reviewed

- Given students have birthdays in the current month
- When an authorized user reviews birthday notifications
- Then the system shall show WhatsApp-ready messages for the birthday students

### Requirement: The system shall provide essential business dashboards

El dashboard inicial debe priorizar membresias, ingresos, gastos, caja, deudas, vencimientos, venta de liquidos y control de horarios/clases.

#### Scenario: Owner reviews monthly performance

- Given payments, expenses and attendance exist for a month
- When an admin or superadmin opens the dashboard
- Then the dashboard shall summarize active students, upcoming expirations, expired memberships, revenue, expenses, available funds, pending debts, liquid sales, stock status and scheduled classes

### Requirement: The system shall restrict dashboard and notification actions by role

Cashier puede preparar/enviar recordatorios operativos y ver una vista limitada; admin y superadmin pueden configurar mensajes y ver metricas completas.

#### Scenario: A cashier opens the dashboard

- Given a user has role `cashier`
- When the user opens the dashboard
- Then the system shall show only operational metrics and hide complete sensitive financial metrics

### Requirement: The system shall validate WhatsApp integration flow locally

El flujo interno de recordatorios WhatsApp debe poder validarse con Supabase CLI antes de conectar el proveedor real.

#### Scenario: WhatsApp reminders are tested locally

- Given local data, Auth/RBAC and generated `database.types.ts` are available through Supabase CLI
- When WhatsApp reminder generation is tested before provider integration
- Then the system shall validate eligible recipients, message payloads and role permissions without requiring production data

### Requirement: The system shall exclude conversational assistants from the MVP

Asistentes conversacionales quedan fuera del MVP cotizado por presupuesto limitado.

#### Scenario: A chatbot feature is requested during MVP

- Given the MVP scope is limited to administration, memberships, finances, dashboard and basic notifications
- When a chatbot or conversational assistant is requested
- Then the feature shall be documented as future optional scope and excluded from the current estimate

## Open Questions

- Definir proveedor de WhatsApp y si los recordatorios se envian automaticamente o se preparan para revision.
- Definir metricas exactas de utilidad aproximada y saldos por cobrar.
- Definir si ocupacion de clases se calcula por asistencia real o cupos/reservas.
