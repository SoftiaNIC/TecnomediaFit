## ADDED Requirements

### Requirement: Birthday notifications must cover today and current month

The system shall show birthday notifications for the current day and a list of birthday students in the current month.

#### Scenario: Owner checks monthly birthdays

- Given students have birth dates in the current month
- When the owner opens birthday notifications
- Then those students shall be listed with date and contact context

### Requirement: Dashboards must focus on memberships, finances, liquids and schedules

The system shall prioritize dashboards for memberships, revenue, expenses, funds, debts, liquid sales, stock and schedules.

#### Scenario: Owner opens the monthly dashboard

- Given operational records exist for the selected month
- When the owner views the dashboard
- Then the system shall summarize active students, membership expirations, revenue, expenses, petty cash, main account, pending debts, liquid sales, stock and scheduled classes

### Requirement: WhatsApp notifications must be included in MVP

The MVP shall include WhatsApp as the required notification channel for payment reminders, membership expirations and birthdays.

#### Scenario: Payment reminder is generated

- Given a student has an upcoming or overdue payment
- When reminders are generated
- Then the system shall prepare or send a WhatsApp notification for that student

### Requirement: Notification and dashboard permissions must follow RBAC

Cashiers shall prepare/send operational reminders and see limited metrics; admin and superadmin shall configure messages and see complete metrics.

#### Scenario: Cashier opens dashboard

- Given a user has role `cashier`
- When the user opens the dashboard
- Then the system shall show operational metrics and hide complete sensitive financial metrics

### Requirement: WhatsApp integration flow must be validated locally

The internal WhatsApp reminder flow shall be validated with Supabase CLI before connecting the real provider.

#### Scenario: Reminder flow is tested locally

- Given local data, Auth/RBAC and generated `database.types.ts` are available through Supabase CLI
- When reminder generation is tested
- Then recipients, payloads and role permissions shall be validated without production data

### Requirement: Conversational assistants must be excluded from MVP

The MVP estimate shall exclude conversational assistants.

#### Scenario: Chat automation is requested

- Given the current estimate has a limited budget
- When conversational assistance is requested
- Then the feature shall be marked as future optional scope
