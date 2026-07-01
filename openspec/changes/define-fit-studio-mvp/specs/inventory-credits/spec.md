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

#### Scenario: Receptionist sells a liquid product

- Given a liquid product has stock and sale price
- When the sale is recorded
- Then stock shall decrease, income shall be registered, and a basic invoice or receipt shall be generated
