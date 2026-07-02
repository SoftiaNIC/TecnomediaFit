---
spec_id: agent-harnessing-workflow
status: draft
version: 0.1
source: docs/agent-harnessing.md
---

# Agent Harnessing Workflow

## Objective

Definir el flujo de orquestacion de agentes para implementar Fit Studio con desarrollo paralelo controlado, modelos adecuados por rol, revision, pruebas y QA antes de integrar cambios.

## Context

Fit Studio usara NestJS, Supabase, Supabase CLI, tipado fuerte y arquitectura feature-first. Para acelerar el desarrollo sin romper contratos compartidos, el proyecto necesita un harness donde cada agente tenga ownership, modelo asignado y gates de calidad.

## Requirements

### Requirement: The orchestrator shall own contracts and integration order

El orquestador debe dividir tareas, fijar contratos compartidos, asignar agentes/modelos y controlar el orden de integracion.

#### Scenario: Multiple agents are assigned

- Given an implementation task touches multiple modules
- When the orchestrator prepares parallel work
- Then each agent shall receive a clear ownership boundary
- And shared contracts shall be defined before implementation starts
- And global files shall be modified only by the orchestrator or with explicit approval

### Requirement: Each agent role shall use a model suited to its responsibility

El harness debe asignar modelos altos a tareas de arquitectura, datos, review y decisiones criticas; y modelos mas ligeros a tareas mecanicas, QA checklist o documentacion.

#### Scenario: A role is selected for a task

- Given a task needs delegation
- When the orchestrator selects an agent role
- Then the selected role shall include a model and reasoning level from `docs/agent-harnessing.md`
- And high-risk roles such as orchestrator, Supabase/data architect and reviewer shall use high-capability models

### Requirement: Supabase work shall use Supabase CLI workflow

El agente Supabase debe trabajar con Supabase CLI para ambiente local, migraciones, seeds, tipos y validacion de integraciones.

#### Scenario: Supabase changes are implemented

- Given product code has been authorized
- When database or Auth/RBAC changes are needed
- Then Supabase changes shall be represented as versioned migrations
- And local validation shall use Supabase CLI
- And generated database types shall update `database.types.ts`

### Requirement: Feature workers shall follow feature-first ownership

Cada agente de feature debe modificar solo su modulo asignado y sus pruebas, evitando choques con otros agentes.

#### Scenario: A feature worker implements a module

- Given a feature worker owns `memberships-payments`, `inventory-credits`, `expenses-cash`, `schedules-classes`, `employees-attendance` or `notifications-analytics`
- When the worker implements behavior
- Then the worker shall keep business logic inside that feature boundary
- And changes to shared contracts shall be escalated to the orchestrator

### Requirement: Reviewer Test shall run before QA acceptance

El Reviewer/Test Engineer debe revisar riesgos, bugs, RBAC, trazabilidad financiera, inventario, tipado y pruebas antes de que QA cierre aceptacion.

#### Scenario: A feature implementation is ready

- Given implementation is complete for a module
- When the work moves to quality review
- Then Reviewer/Test shall inspect correctness, permissions, traceability and test coverage
- And QA shall validate OpenSpec scenarios only after review findings are resolved or accepted

### Requirement: QA shall validate against OpenSpec scenarios

QA debe validar los escenarios OpenSpec y smoke tests relevantes antes del cierre.

#### Scenario: QA validates the local core

- Given the local backend and Supabase environment are available
- When QA runs acceptance
- Then QA shall validate the scenarios from `core-supabase-foundation`
- And QA shall confirm role seeds, cashier restrictions, typed Supabase flow and relevant module smoke tests

## Out Of Scope

- Ejecutar agentes sin ownership claro.
- Usar modelos altos para tareas mecanicas de bajo riesgo.
- Permitir cambios globales no coordinados.
- Saltar Reviewer/Test o QA en cambios de datos, finanzas, RBAC o inventario.
