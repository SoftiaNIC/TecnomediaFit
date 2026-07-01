## ADDED Requirements

### Requirement: Expenses must be categorized by business type

The system shall classify fixed, variable, tax, cleaning, rent, electricity and unexpected expenses.

#### Scenario: Unexpected expense is registered

- Given an expense does not match a fixed category
- When it is recorded as unexpected
- Then the system shall preserve amount, currency, description, date and status

### Requirement: Funds must distinguish petty cash and main account

The system shall record whether a movement belongs to petty cash or the main account.

#### Scenario: Expense is paid from petty cash

- Given petty cash has balance
- When an expense is paid from petty cash
- Then the movement shall be linked to petty cash instead of the main account
