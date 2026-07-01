---
type: concept
status: active
source_count: 2
---

# Spec-driven workflow

Este workspace combina OpenSpec y LLM-Wiki.

## LLM-Wiki

La wiki funciona como una capa compilada entre las fuentes crudas y las decisiones del proyecto. `raw/` conserva fuentes inmutables; `wiki/` mantiene sintesis viva; `wiki/index.md` permite navegar; `wiki/log.md` registra la historia.

## OpenSpec

OpenSpec se usa como fuente de verdad de alcance. `openspec/project.md` define reglas globales, `openspec/specs/` contiene capacidades acordadas y `openspec/changes/` contiene propuestas activas.

## Flujo local

1. Guardar fuentes nuevas en `raw/sources/`.
2. Integrar conocimiento en paginas relevantes de `wiki/`.
3. Registrar cambios de alcance en `openspec/changes/`.
4. Consolidar requisitos aprobados en `openspec/specs/`.
5. Actualizar cotizacion y paper de arquitectura desde specs, no desde chat suelto.

## Relacion con entregables

- La cotizacion debe tomar fases y supuestos desde OpenSpec.
- El paper de arquitectura debe tomar modulos, entidades y riesgos desde OpenSpec y wiki.
- La implementacion futura debe iniciar solo cuando el cambio MVP este aprobado.
