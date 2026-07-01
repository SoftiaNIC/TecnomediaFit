---
spec_id: core-supabase-foundation
status: draft
version: 0.1
source: docs/paper-arquitectura.md
---

# Core Supabase Foundation

## Objective

Definir la primera spec de implementacion para arrancar el core backend de Fit Studio con NestJS, Supabase local, Supabase CLI, RBAC, tipado fuerte y modulos feature-first antes de construir UI o conectar proveedores externos.

## Context

Fit Studio ya tiene alcance MVP documentado para membresias, pagos, facturacion basica, inventario de liquidos, gastos, horarios, asistencia, WhatsApp y dashboards. Esta spec convierte esa direccion en el contrato inicial para empezar codigo productivo de forma controlada.

## Implementation Baseline

- Backend/API primero; no frontend en esta primera etapa.
- NestJS como backend principal.
- Supabase como plataforma de datos y autenticacion.
- Supabase CLI como flujo obligatorio para ambiente local, migraciones, tipos y validacion de integraciones.
- TypeScript con tipado fuerte.
- Arquitectura feature-first separada por modulo.
- WhatsApp queda como contrato de cola/adaptador hasta definir proveedor real.

## Requirements

### Requirement: The initial implementation shall start with backend/API core only

La primera implementacion debe crear la base backend/API con NestJS y Supabase local, sin iniciar frontend ni integraciones externas reales.

#### Scenario: Product implementation is authorized

- Given the user authorizes product code initialization
- When the first implementation task starts
- Then the repository shall initialize the backend/API core
- And it shall not create frontend application code unless explicitly approved
- And it shall not require a real WhatsApp provider to validate the local core

### Requirement: The core shall use Supabase CLI as the local integration workflow

Supabase CLI debe usarse para inicializar el entorno local, levantar servicios, aplicar migraciones, generar tipos y validar flujos con datos locales.

#### Scenario: Local Supabase environment is prepared

- Given implementation has started
- When the developer prepares the local backend environment
- Then `supabase init` shall create the local Supabase configuration
- And `supabase start` shall provide local Postgres/Auth services
- And migrations shall live in `supabase/migrations`
- And `supabase gen types typescript --local` shall generate `database.types.ts`

### Requirement: The initial data model shall cover the MVP core

El primer modelo de datos debe cubrir usuarios/perfiles, alumnos, membresias, pagos, facturas/recibos, liquidos, inventario, creditos, gastos, caja, horarios, asistencia y notificaciones.

#### Scenario: Initial migrations are reviewed

- Given the first Supabase migrations are created
- When the schema is reviewed against the MVP scope
- Then it shall include tables or equivalent structures for roles/profiles, students, memberships, payments, basic invoices/receipts, liquid products, inventory movements, student debts, expenses, petty cash, main account, classes, sessions, attendance and notification queue
- And it shall preserve traceability for financial and inventory corrections

### Requirement: The core shall enforce the initial RBAC model

El MVP debe operar con roles `superadmin`, `admin` y `cashier`, iniciando con 2 cajeros, 1 admin y 1 superadmin.

#### Scenario: Local seed users are created

- Given the local environment needs initial access accounts
- When seed data is prepared
- Then it shall include 2 `cashier` accounts, 1 `admin` account and 1 `superadmin` account
- And instructors shall be represented as employees/instructors without login by default

#### Scenario: A cashier performs restricted operations

- Given a user has role `cashier`
- When the user attempts to delete historical records, change roles, manually adjust stock, modify global configuration or view sensitive full metrics
- Then the backend shall reject the action or require `admin`/`superadmin` authorization

### Requirement: The backend shall be organized feature-first

El codigo NestJS debe separarse por modulo de negocio para permitir desarrollo rapido y paralelo con ownership claro.

#### Scenario: A new backend capability is implemented

- Given a developer adds API behavior for the MVP
- When the behavior belongs to memberships, inventory, expenses, schedules, employees, notifications or RBAC
- Then it shall be implemented inside the corresponding feature module
- And generic folders shall not become the owner of business logic

### Requirement: The core shall use strong typing for critical data

Los datos criticos deben usar TypeScript strict, DTOs tipados, roles como union literal y tipos generados desde Supabase.

#### Scenario: Critical records are handled

- Given the backend reads or writes payments, invoices, inventory, expenses, schedules, attendance or notifications
- When the code defines contracts for those records
- Then it shall use typed DTOs and generated Supabase database types
- And it shall avoid untyped free-form objects for business-critical fields

### Requirement: WhatsApp shall begin as an integration contract

WhatsApp es obligatorio para el MVP, pero el proveedor real puede quedar pendiente durante la implementacion inicial del core.

#### Scenario: WhatsApp provider is not selected

- Given the WhatsApp provider and operational cost are still pending
- When the notification module is implemented in the core
- Then it shall create a queue/adaptor boundary for WhatsApp messages
- And local validation shall use migrated, typed Supabase data before connecting a real provider

### Requirement: The initial defaults shall unblock implementation

La implementacion inicial debe usar defaults documentados para avanzar sin bloquearse por decisiones comerciales pendientes.

#### Scenario: A pending decision affects the first core implementation

- Given final business details are still pending
- When the first backend schema and services are implemented
- Then reports shall use C$ as base currency while preserving original amount and currency
- And invoices/receipts shall use simple internal non-fiscal numbering
- And class attendance shall start as administrative attendance without reservations or capacity management

## Out Of Scope

- Frontend/UI.
- Chatbot or conversational assistant.
- Real WhatsApp provider integration before provider selection.
- Fiscal invoicing or tax authority integration.
- Production deployment or production Supabase project linking.
- Ecommerce or general product catalog.
