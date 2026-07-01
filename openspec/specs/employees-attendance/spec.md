---
spec_id: employees-attendance
status: draft
version: 0.2
source: raw/sources/2026-06-24-fit-studio-brief.md
---

# Employees And Attendance

## Objective

Controlar cajeros operativos, instructores registrados, turnos y entrada/salida de empleados.

## Requirements

### Requirement: The system shall manage instructors as employees

Los instructores deben formar parte del control de empleados, pero no requieren login en el MVP.

#### Scenario: An instructor is assigned to a class

- Given an instructor exists as an employee
- When a class session is scheduled
- Then the session can be assigned to that instructor

### Requirement: The system shall support two cashier operator accounts

El MVP debe soportar dos cuentas de cajero para operacion diaria.

#### Scenario: A cashier starts a shift

- Given the cashier is assigned to an operating shift
- When the cashier checks in
- Then the system shall record employee, timestamp and shift

### Requirement: The system shall record employee check-in and check-out

La entrada y salida laboral deben quedar registradas.

#### Scenario: A checkout is missing

- Given an employee checked in
- When the work period ends without checkout
- Then the system shall show the attendance record as incomplete

### Requirement: The system shall keep instructor login out of MVP

Los instructores se gestionan como empleados/instructores registrados sin acceso de usuario en el MVP.

#### Scenario: An instructor needs to be tracked

- Given an instructor teaches a class
- When the instructor is registered
- Then the system shall store the instructor as an employee record without requiring login credentials

## Open Questions

- Definir si empleados tendran salarios o solo asistencia.
- Definir si los instructores cobran por clase, por turno o fuera del sistema.
