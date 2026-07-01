## ADDED Requirements

### Requirement: Inventory must be limited to liquids

The initial inventory system shall only manage liquid products.

#### Scenario: Product is added to inventory

- Given the product is a liquid
- When the product is created
- Then the system shall allow it in inventory

### Requirement: Student credits must track inventory debts

The system shall record pending student debts related to liquid inventory.

#### Scenario: Student consumes a liquid on credit

- Given stock is available
- When the item is assigned to the student as pending
- Then stock shall decrease and a student debt shall be created

### Requirement: Liquid sales must generate basic invoices

The system shall record liquid sales and generate a basic internal invoice or receipt.

#### Scenario: Cashier sells a liquid product

- Given a liquid product has stock and sale price
- When the sale is recorded
- Then stock shall decrease, income shall be registered, and a basic invoice or receipt shall be generated

### Requirement: Cashiers must not manually adjust stock

Cashiers shall sell liquids and register sale-driven exits but shall not manually adjust stock.

#### Scenario: Cashier attempts manual stock adjustment

- Given a liquid product exists
- When a `cashier` attempts to adjust stock outside a sale
- Then the system shall require `admin` or `superadmin` authorization
