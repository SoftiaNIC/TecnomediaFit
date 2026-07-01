# OpenSpec Workspace

Este directorio define el trabajo spec-driven para Fit Studio.

## Estructura

- `project.md`: constitucion del proyecto y reglas globales.
- `specs/`: estado acordado de las capacidades del sistema.
- `changes/`: propuestas activas o pendientes antes de consolidarse.
- `changes/archive/`: espacio futuro para cambios cerrados.

## Flujo recomendado

1. Leer `project.md`, `wiki/index.md` y las specs relevantes.
2. Crear un cambio con nombre verbal: `define-fit-studio-mvp`, `add-payment-receipts`, etc.
3. Documentar `proposal.md`, `tasks.md`, `design.md` si aplica, y deltas/specs por capacidad.
4. Escribir requisitos con `### Requirement:` y escenarios `#### Scenario:`.
5. Validar preguntas abiertas, riesgos y criterios de aceptacion antes de pasar a implementacion.
6. Consolidar el cambio aprobado en `specs/`.

## Convenciones

- Cada funcionalidad nueva debe tener una spec propia.
- La spec debe incluir objetivo, usuarios, reglas de negocio, criterios de aceptacion y no-objetivos.
- Los cambios grandes deben documentarse antes de implementarse.
- Los requisitos deben ser verificables y evitar ambiguedades como "facil", "rapido" o "completo" sin criterio observable.

## Cambio activo

- `changes/define-fit-studio-mvp/`: propuesta inicial para cerrar alcance, cotizacion y arquitectura de Fit Studio.
