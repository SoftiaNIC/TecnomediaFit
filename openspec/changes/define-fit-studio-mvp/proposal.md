# Define Fit Studio MVP

## Why

Fit Studio necesita convertir un brief inicial en alcance cotizable y arquitectura funcional antes de iniciar codigo. Por presupuesto limitado, el MVP debe priorizar membresias, facturacion basica, control financiero, horarios, empleados, inventario/venta de liquidos, gastos y dashboards de metricas esenciales, dejando asistentes conversacionales fuera del alcance cotizado.

## What Changes

- Establecer el alcance MVP del sistema administrativo.
- Separar capacidades en specs independientes.
- Registrar reglas de negocio conocidas y preguntas abiertas.
- Preparar base para cotizacion y paper de arquitectura.
- Definir `core-supabase-foundation` como spec inicial para arrancar backend/API con NestJS, Supabase CLI, RBAC, tipado fuerte y modulos feature-first.
- Mantener fuera de alcance el codigo productivo hasta aprobar la definicion.

## Impact

- Afecta docs de cotizacion y arquitectura.
- Crea base para futuras decisiones de tecnologia.
- Reduce riesgo de construir funcionalidades no confirmadas.

## Out Of Scope

- Implementacion de frontend, backend, base de datos o despliegue.
- Conexion real con proveedores externos antes de seleccionar proveedor y aprobar costos operativos.
- Facturacion fiscal avanzada.
- Asistentes conversacionales.
- Ecommerce o venta general de productos.

## Approval Criteria

- Cada modulo principal tiene una spec con requisitos y escenarios.
- Las preguntas criticas para precio, moneda, facturacion basica, horarios y metricas quedan visibles.
- La cotizacion puede estimarse por fases.
- El paper de arquitectura puede explicar modulos, datos y riesgos.
