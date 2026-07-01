## ADDED Requirements

### Requirement: Class schedules must respect operating hours

The system shall validate sessions against Fit Studio operating hours.

#### Scenario: Saturday class is scheduled

- Given Saturday operating hours are 9 am to 12 pm
- When a class is scheduled within that block
- Then the system shall allow it if the session duration fits

### Requirement: Session duration must follow class type

The system shall default Ballet and Urbano to 1.5 hours and other known classes to 1 hour.

#### Scenario: Urbano is scheduled

- Given the class type is Urbano
- When a session is created
- Then the duration shall default to 1.5 hours
