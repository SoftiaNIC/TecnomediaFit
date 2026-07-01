## ADDED Requirements

### Requirement: Instructors must be treated as employees

The system shall include instructors in employee management.

#### Scenario: Instructor teaches a class

- Given an instructor employee exists
- When a class is assigned
- Then the class shall reference that employee as instructor

### Requirement: Employee attendance must record check-in and check-out

The system shall record employee entry and exit times.

#### Scenario: Cashier checks in

- Given the cashier is assigned to a shift
- When check-in is recorded
- Then the system shall store employee, shift and timestamp

### Requirement: Instructors must not require login in MVP

The MVP shall manage instructors as employee records without requiring user accounts.

#### Scenario: Instructor is registered

- Given an instructor needs to be assigned to classes
- When the instructor is created
- Then the system shall store the instructor as an employee record without login credentials
