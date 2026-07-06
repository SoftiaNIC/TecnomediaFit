# Log

## [2026-06-24] init | Fit Studio knowledge base

- Se creo la base de wiki para Fit Studio.
- Se capturo el brief inicial como fuente cruda.
- Se definio un indice inicial de conceptos y dominios.
- Se preparo el esqueleto de OpenSpec para trabajo spec-driven.

## [2026-06-24] update | OpenSpec and LLM-Wiki initialization

- Se agrego `openspec/project.md` como constitucion del proyecto.
- Se creo el cambio activo `openspec/changes/define-fit-studio-mvp/`.
- Se separaron specs por capacidades: membresias, horarios, empleados, inventario, gastos y notificaciones.
- Se reforzo `AGENTS.md` con reglas para LLM-Wiki y OpenSpec.
- Se agregaron paginas de preguntas abiertas y workflow spec-driven.

## [2026-06-24] update | MVP sin asistentes conversacionales

- Se ajusto la cotizacion para presupuesto limitado, omitiendo asistentes conversacionales del MVP.
- Se priorizo dashboard inicial de membresias y finanzas.
- Se actualizaron OpenSpec, paper de arquitectura y wiki para reflejar que el chatbot queda fuera de la cotizacion final.

## [2026-06-24] update | Presupuesto 500-600 USD y facturacion basica

- Se registro presupuesto del cliente de 500 USD y presupuesto deseado de 600 USD.
- Se ajusto la cotizacion a paquete base y paquete recomendado.
- Se agrego facturacion basica interna para membresias y venta de liquidos.
- Se reforzo que horarios y metricas son parte necesaria del MVP.

## [2026-06-24] update | WhatsApp obligatorio y justificacion de 600 USD

- Se marco WhatsApp como canal obligatorio de notificaciones del MVP.
- Se separo costo de desarrollo de costos variables de Meta/proveedor/mensajes.
- Se agrego justificacion del precio recomendado de 600 USD por modulos.

## [2026-07-01] update | Spec inicial core Supabase

- Se creo `openspec/specs/core-supabase-foundation/spec.md` como contrato inicial para proceder con implementacion.
- Se documento backend/API primero con NestJS, Supabase local, Supabase CLI, RBAC, tipado fuerte y modulos feature-first.
- Se dejaron defaults de arranque: C$ como moneda base de reportes, recibos internos no fiscales y asistencia administrativa sin reservas.

## [2026-07-01] update | Agent harnessing del proyecto

- Se creo `docs/agent-harnessing.md` con workflow de orquestador, Supabase/Data Architect, Feature Workers, Reviewer/Test, QA y Documentation.
- Se asignaron modelos por rol para usar modelos altos en arquitectura, datos y review, y modelos ligeros en QA checklist, documentacion y parches acotados.
- Se agrego `openspec/specs/agent-harnessing-workflow/spec.md` como spec verificable del flujo de agentes.

## [2026-07-02] update | Inicio de implementacion Turbo SvelteKit Nest Supabase

- El usuario autorizo iniciar codigo productivo.
- Se ajusto el stack inicial a monorepo Turbo con `apps/web` en SvelteKit, `apps/api` en NestJS y Supabase local.
- Se mantiene Supabase CLI como flujo obligatorio para migraciones, seeds, tipos y validacion local.
- El frontend inicial queda como shell de login/dashboard; las pantallas CRUD completas siguen sujetas a specs de modulo.
