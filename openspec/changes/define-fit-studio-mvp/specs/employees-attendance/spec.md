## ADDED Requirements

### Requirement: Instructors must be treated as employees

The system shall include instructors in employee management.

#### Scenario: Instructor teaches a class

- Given an instructor employee exists
- When a class is assigned
- Then the class shall reference that employee as instructor

### Requirement: Employee attendance must record check-in and check-out

The system shall record employee entry and exit times.

#### Scenario: Receptionist checks in

- Given the receptionist is assigned to a shift
- When check-in is recorded
- Then the system shall store employee, shift and timestamp
