---
spec_id: schedules-classes
status: draft
version: 0.1
source: raw/sources/2026-06-24-fit-studio-brief.md
---

# Schedules And Classes

## Objective

Gestionar clases, horarios de atencion, duraciones de sesion y disponibilidad operativa.

## Requirements

### Requirement: The system shall model the initial class catalog

El sistema debe incluir Spinning, Zumba, Acondicionamiento fisico, Ritmo Latino, Urbano y Ballet.

#### Scenario: A class schedule is created

- Given a class type exists in the catalog
- When an administrator creates a scheduled session
- Then the session shall reference the class type and its expected duration

### Requirement: The system shall respect operating hours

Los horarios disponibles deben respetar lunes a viernes 6 am a 9 am y 3 pm a 9 pm, y sabado 9 am a 12 pm.

#### Scenario: A weekday morning class is scheduled

- Given the day is Monday through Friday
- When a class is scheduled between 6 am and 9 am
- Then the system shall allow the session if duration fits in the block

#### Scenario: A class is scheduled outside opening hours

- Given the day and hour are outside the configured operating blocks
- When an administrator attempts to schedule the class
- Then the system shall flag the schedule as invalid or require explicit override

### Requirement: The system shall enforce known session durations

Clases regulares duran una hora; Ballet y Urbano duran una hora y media.

#### Scenario: Ballet is scheduled

- Given the class type is Ballet
- When the session is created
- Then the default duration shall be 1.5 hours

## Open Questions

- Confirmar si hay cupos maximos por clase.
- Confirmar si alumnos reservan clase o solo se registra asistencia.
- Confirmar si profesores pueden modificar horarios.
