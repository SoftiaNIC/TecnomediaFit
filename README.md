# TecnomediaFit

Monorepo para Fit Studio: base documental, especificacion OpenSpec y primera implementacion con Turbo, SvelteKit, NestJS y Supabase local.

## Estructura

- `raw/`: brief y fuentes originales.
- `wiki/`: LLM-Wiki con sintesis, enlaces e historial.
- `openspec/`: especificacion spec-driven del producto por capacidades y cambios.
- `docs/`: cotizacion y paper de arquitectura.
- `apps/api/`: backend/API NestJS.
- `apps/web/`: shell frontend SvelteKit.
- `packages/shared/`: contratos compartidos de dominio.
- `packages/database/`: tipos y helpers Supabase.
- `supabase/`: config local, migraciones y seeds.

## Estado

Implementacion inicial autorizada el 2026-07-02. El primer lote contiene scaffold funcional de monorepo, API, web shell, Supabase local y contratos RBAC.

## Punto de entrada

1. Leer `AGENTS.md`.
2. Revisar `wiki/index.md`.
3. Revisar `openspec/project.md`.
4. Instalar dependencias con `pnpm install`.
5. Usar `pnpm build`, `pnpm lint` y `pnpm test` para validar el monorepo.
6. Usar `pnpm supabase:start` y `pnpm supabase:types` cuando Docker/Supabase local esten disponibles.
