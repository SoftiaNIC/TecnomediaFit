# Workspace Schema

Este workspace se usa para discovery, cotizacion, arquitectura y especificacion de Fit Studio antes de iniciar codigo del producto.

## Capas

- `raw/`: fuentes crudas e inmutables.
- `wiki/`: LLM-Wiki mantenida por el agente, con sintesis, enlaces y memoria viva.
- `openspec/`: definicion spec-driven del alcance, cambios activos, decisiones y tareas por funcionalidad.
- `docs/`: entregables externos, como cotizacion y paper de arquitectura.

## Reglas de trabajo

- No sobrescribir `raw/` salvo para agregar nuevas fuentes.
- Al agregar una fuente, guardarla primero en `raw/sources/` y luego integrarla a `wiki/`.
- Mantener `wiki/index.md` y `wiki/log.md` actualizados cuando cambie el conocimiento o se cree una sintesis nueva.
- Leer `wiki/index.md` antes de responder preguntas de dominio y abrir solo las paginas relevantes.
- Antes de pasar a implementacion, cerrar primero el alcance en `openspec/specs/` y revisar cambios activos en `openspec/changes/`.
- El codigo del producto aun no se inicia; este repositorio se usa primero para discovery, cotizacion y arquitectura.
- No crear carpetas de aplicacion, frameworks o codigo productivo hasta que el usuario autorice iniciar implementacion.

## Convenciones LLM-Wiki

- `wiki/index.md` es el catalogo navegable por contenido.
- `wiki/log.md` es cronologico y append-only; cada entrada debe iniciar con `## [YYYY-MM-DD] tipo | titulo`.
- Las paginas de `wiki/entities/` describen actores, negocios o entidades del dominio.
- Las paginas de `wiki/concepts/` sintetizan temas funcionales, reglas, dudas y relaciones.
- Usar enlaces relativos entre paginas cuando una idea dependa de otra.
- Si una fuente contradice una sintesis previa, registrar la contradiccion en la pagina afectada y en `wiki/log.md`.

## Convenciones OpenSpec

- `openspec/project.md` contiene la constitucion del proyecto.
- `openspec/specs/<capability>/spec.md` representa el estado acordado de una capacidad.
- `openspec/changes/<change-id>/` representa una propuesta activa o pendiente de aprobacion.
- Cada cambio debe tener `proposal.md`, `tasks.md` y, si afecta arquitectura, `design.md`.
- Los requisitos deben escribirse como `### Requirement: ...` y tener al menos un `#### Scenario: ...`.
- No implementar codigo desde un cambio hasta que sus tareas de discovery criticas esten cerradas.

## Dominio actual

Fit Studio es un estudio deportivo/gimnasio con clases, control de empleados, membresias, inventario de liquidos, gastos, recibos, notificaciones y dashboards.

## Fuentes principales

- Brief inicial del usuario: `raw/sources/2026-06-24-fit-studio-brief.md`
- Indice de conocimiento: `wiki/index.md`
- Bitacora: `wiki/log.md`
- Especificacion base: `openspec/specs/fit-studio-platform/spec.md`
- Cambio activo de definicion MVP: `openspec/changes/define-fit-studio-mvp/proposal.md`
