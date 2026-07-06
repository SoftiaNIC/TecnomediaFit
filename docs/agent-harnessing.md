# Agent Harnessing - Fit Studio

## Proposito

Definir el flujo de trabajo con agentes para implementar Fit Studio rapido, con bajo conflicto entre archivos y con control de calidad antes de integrar cambios. El harness se apoya en OpenSpec, Turbo, SvelteKit, NestJS, Supabase, Supabase CLI, tipado fuerte y arquitectura feature-first.

## Principios

- El orquestador decide alcance, contratos compartidos y orden de integracion.
- Cada agente trabaja con ownership claro de modulo o responsabilidad.
- Ningun agente debe revertir cambios ajenos.
- Los agentes de implementacion deben seguir OpenSpec antes que preferencias propias.
- Supabase CLI es obligatorio para migraciones, ambiente local, tipos y validacion de integraciones.
- Los cambios globales se hacen solo por el orquestador o con aprobacion explicita.
- Reviewer, Test y QA son pasos separados de implementacion.

## Modelos Por Rol

| Rol | Modelo | Reasoning | Uso |
| --- | --- | --- | --- |
| Orquestador / Lead Architect | `gpt-5.5` | `xhigh` | Divide trabajo, protege contratos, resuelve conflictos, integra resultados y decide prioridades. |
| Supabase / Data Architect | `gpt-5.5` | `high` | Disena schema, migraciones, Auth/RBAC, RLS/politicas, seeds, tipos y validacion con Supabase CLI. |
| Backend Core / Nest Architect | `gpt-5.4` | `high` | Crea estructura NestJS, modulos base, guards, DTOs, servicios compartidos y wiring principal. |
| Web Core / SvelteKit Architect | `gpt-5.4` | `medium` | Crea shell SvelteKit, rutas base, consumo API, estados de auth y componentes UI iniciales. |
| Feature Worker | `gpt-5.4` | `medium` | Implementa una feature de negocio con ownership completo y pruebas locales. |
| Fast Patch Worker | `gpt-5.3-codex-spark` | `medium` | Cambios pequenos, mecanicos o muy acotados dentro de un modulo. |
| Reviewer / Test Engineer | `gpt-5.5` | `high` | Revisa riesgos, bugs, permisos, trazabilidad financiera, pruebas faltantes y regresiones. |
| QA / Acceptance Agent | `gpt-5.4-mini` | `high` | Ejecuta checklist de aceptacion, escenarios OpenSpec, smoke tests y hallazgos reproducibles. |
| Documentation / Spec Scribe | `gpt-5.4-mini` | `medium` | Actualiza docs, wiki, OpenSpec, notas de cambios y bitacora. |

## Skills Y Herramientas

### Supabase

El agente Supabase debe usar el skill o flujo equivalente de Supabase CLI para:

- `supabase init` o configuracion equivalente versionada cuando se autorice codigo.
- `supabase start` para ambiente local.
- Migraciones versionadas en `supabase/migrations`.
- Seeds locales para roles y datos minimos.
- `supabase gen types typescript --local` para generar `database.types.ts`.
- Validar Auth/RBAC, datos locales y flujos de notificacion antes de proveedor real.

### OpenSpec

Todos los agentes deben leer:

- `openspec/project.md`
- `openspec/specs/core-supabase-foundation/spec.md`
- La spec del modulo asignado.
- Deltas activos en `openspec/changes/define-fit-studio-mvp/`.

### LLM-Wiki

Antes de responder dudas de dominio, el agente debe leer `wiki/index.md` y abrir solo las paginas relevantes.

## Workflow De Orquestacion

### 1. Intake

El orquestador recibe la tarea y confirma:

- Spec aplicable.
- Archivos o modulos afectados.
- Riesgos de datos, RBAC, finanzas o inventario.
- Agentes necesarios.
- Modelo asignado por rol.

### 2. Contract Lock

Antes de paralelizar, el orquestador fija contratos compartidos:

- Schema Supabase esperado.
- Tipos generados y DTOs publicos.
- Permisos RBAC.
- Endpoints o casos de uso.
- Escenarios OpenSpec que deben pasar.

### 3. Parallel Work

Los agentes se separan por ownership:

- Supabase/Data: migraciones, seeds, RLS/politicas, tipos.
- Backend Core: NestJS base, auth, guards, cliente Supabase tipado.
- Web Core: SvelteKit shell, rutas base, consumo API y UI inicial.
- Feature Worker: modulo especifico.
- Documentation: specs/wiki si cambia conocimiento.

Los agentes no deben tocar archivos fuera de su ownership sin avisar al orquestador.

### 4. Integration Gate

El orquestador integra cambios en orden:

1. Migraciones y tipos.
2. Core NestJS compartido.
3. Features.
4. Tests.
5. Docs.

Si hay conflicto entre feature y contrato, se corrige el contrato o se rechaza la implementacion antes de avanzar.

### 5. Reviewer Test

El Reviewer/Test Engineer revisa:

- Reglas de negocio.
- Seguridad y RBAC.
- Trazabilidad financiera.
- Inventario y ajustes.
- Tipado fuerte.
- Cobertura de pruebas.
- Riesgos de integracion Supabase.

### 6. QA Gate

El QA/Acceptance Agent valida:

- Escenarios OpenSpec.
- Smoke test de API.
- Flujo local con Supabase CLI.
- Seed de 2 `cashier`, 1 `admin`, 1 `superadmin`.
- Restricciones de cashier.
- Generacion de recibo/factura basica.
- Dashboard financiero/membresias cuando exista.

### 7. Closeout

El orquestador entrega:

- Cambios integrados.
- Comandos ejecutados.
- Pruebas realizadas.
- Riesgos restantes.
- Pendientes reales para el usuario.

## Ownership Por Modulo

| Modulo | Ownership Principal | Apoyo |
| --- | --- | --- |
| `auth-rbac` | Backend Core / Supabase | Reviewer |
| `web-shell` | Web Core / Orquestador | QA |
| `memberships-payments` | Feature Worker | Supabase, Reviewer |
| `inventory-credits` | Feature Worker | Supabase, QA |
| `expenses-cash` | Feature Worker | Reviewer |
| `schedules-classes` | Feature Worker | QA |
| `employees-attendance` | Feature Worker | QA |
| `notifications-analytics` | Feature Worker | Supabase, Reviewer |

## Reglas De Paralelizacion

- Una migracion compartida debe ser propiedad del agente Supabase o del orquestador.
- Un agente por feature puede modificar solo su carpeta de feature y sus pruebas.
- Cambios en `database.types.ts`, auth, guards, config global o package scripts son globales y requieren orquestador.
- Si dos agentes necesitan el mismo archivo, el orquestador serializa el cambio.
- Los tests pueden correr en paralelo si no mutan estado compartido.

## Checklist Antes De Implementar Codigo

- OpenSpec revisado y aprobado.
- `core-supabase-foundation` usado como spec inicial.
- Docker y Supabase CLI disponibles o instalacion definida.
- Package manager definido.
- `.env.example` sin secretos reales.
- Roles iniciales definidos.
- Moneda base temporal definida como C$.
- Factura/recibo basico no fiscal definido.
- WhatsApp con cola/adaptador, proveedor real pendiente.
