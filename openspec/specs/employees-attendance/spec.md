---
spec_id: employees-attendance
status: draft
version: 0.1
source: raw/sources/2026-06-24-fit-studio-brief.md
---

# Employees And Attendance

## Objective

Controlar instructores, recepcionistas, turnos y entrada/salida de empleados.

## Requirements

### Requirement: The system shall manage instructors as employees

Los instructores deben formar parte del control de empleados.

#### Scenario: An instructor is assigned to a class

- Given an instructor exists as an employee
- When a class session is scheduled
- Then the session can be assigned to that instructor

### Requirement: The system shall support two receptionist shifts

El negocio tiene una recepcionista en la manana y otra en la noche.

#### Scenario: A receptionist starts a shift

- Given the receptionist is assigned to the morning or night shift
- When the receptionist checks in
- Then the system shall record employee, timestamp and shift

### Requirement: The system shall record employee check-in and check-out

La entrada y salida laboral deben quedar registradas.

#### Scenario: A checkout is missing

- Given an employee checked in
- When the work period ends without checkout
- Then the system shall show the attendance record as incomplete

## Open Questions

- Definir si empleados tendran salarios o solo asistencia.
- Definir si los instructores cobran por clase, por turno o fuera del sistema.
- Definir permisos por rol.
