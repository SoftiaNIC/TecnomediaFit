### Requirement: Core implementation must start backend/API first

The first product implementation shall initialize the backend/API core with NestJS and Supabase local before frontend, production deployment or real external providers.

#### Scenario: Initial implementation is authorized

- Given the MVP scope has been approved for implementation
- When product code starts
- Then the first implementation shall follow `core-supabase-foundation`
- And it shall initialize backend/API core before frontend work

### Requirement: Supabase CLI must be the local foundation workflow

The implementation shall use Supabase CLI for local services, migrations, generated database types and local integration validation.

#### Scenario: Local backend environment is prepared

- Given the backend core is being initialized
- When Supabase local development is prepared
- Then migrations shall be versioned under `supabase/migrations`
- And `database.types.ts` shall be generated from the local schema

### Requirement: Core contracts must include RBAC, feature-first and strong typing

The first backend structure shall enforce the agreed roles, feature-first module ownership and typed contracts for critical business data.

#### Scenario: A critical feature is implemented

- Given a developer implements payments, invoices, inventory, expenses, schedules, attendance or notifications
- When the code defines API and data contracts
- Then it shall use typed DTOs, generated Supabase types and the roles `superadmin`, `admin` and `cashier`
- And cashier-restricted actions shall require `admin` or `superadmin` authorization
