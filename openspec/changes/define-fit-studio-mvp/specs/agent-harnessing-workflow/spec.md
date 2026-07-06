### Requirement: Agent harnessing must guide parallel implementation

The project shall use an orchestrated agent workflow with role ownership, model assignment, Reviewer/Test and QA gates.

#### Scenario: Multiple agents work in parallel

- Given implementation is split by feature or responsibility
- When the orchestrator assigns agents
- Then each agent shall receive a role, model, reasoning level and ownership boundary
- And quality gates shall run before closeout

### Requirement: Supabase agent work must use Supabase CLI

Supabase-related implementation shall be delegated to a high-capability data role and validated through Supabase CLI.

#### Scenario: Database work is delegated

- Given schema, Auth/RBAC, seed or type generation changes are required
- When the Supabase/Data Architect works on the task
- Then the task shall use Supabase CLI workflow for migrations, local validation and generated types

### Requirement: Web and API work must have separate ownership

SvelteKit, NestJS, shared contracts, database types and Supabase migrations shall be owned separately to reduce conflicts.

#### Scenario: Full-stack work is delegated

- Given a task touches `apps/web`, `apps/api`, `packages/shared`, `packages/database` or `supabase`
- When the orchestrator assigns agents
- Then shared contracts shall be updated before app-specific work
- And web workers shall not change API or database contracts without escalation
