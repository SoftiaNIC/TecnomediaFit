## ADDED Requirements

### Requirement: Platform scope must remain administrative before implementation

The Fit Studio platform shall be defined as an administrative and operational system before any product code is started.

#### Scenario: Implementation is requested before scope approval

- Given the MVP scope is still draft
- When product code is requested
- Then the agent shall first surface remaining scope questions and avoid creating production code until approved

### Requirement: Platform capabilities must be separated by domain

The platform shall separate requirements for payments, schedules, employees, inventory, expenses, notifications and analytics.

#### Scenario: A new requirement is added

- Given a new business requirement is discovered
- When it is documented
- Then it shall be placed in the closest capability spec or a new capability spec if needed

### Requirement: Platform must define technical direction

The platform shall summarize NestJS as backend/API, Supabase as data/auth, Supabase CLI for migrations/types/local integration validation, generated `database.types.ts`, strong typing and feature-first module boundaries.

#### Scenario: Implementation is prepared

- Given code has not started
- When the implementation plan is created
- Then it shall follow NestJS, Supabase, Supabase CLI, generated `database.types.ts`, local integration validation, strong typing and feature-first organization

### Requirement: Platform must include initial RBAC

The MVP shall include 2 `cashier`, 1 `admin` and 1 `superadmin` accounts.

#### Scenario: Cashier attempts a critical action

- Given a user has role `cashier`
- When the user attempts to delete history, change roles, adjust stock manually or modify global configuration
- Then the system shall require `admin` or `superadmin` authorization
