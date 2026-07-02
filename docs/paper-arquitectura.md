# Paper de arquitectura - Fit Studio

## Proposito

Definir una arquitectura funcional y tecnica para Fit Studio antes de escribir codigo. El objetivo es sostener la operacion diaria del estudio con foco en membresias, facturacion basica, venta de liquidos, horarios, control financiero, metricas esenciales y notificaciones via WhatsApp.

## Contexto del negocio

Fit Studio es un estudio deportivo con clases de Spinning, Zumba, Acondicionamiento fisico, Ritmo Latino, Urbano y Ballet. Atiende aproximadamente 80 a 100 alumnos al mes, no realiza venta general de productos y necesita administrar membresias, empleados, inventario/venta de liquidos, gastos, facturacion basica interna, horarios, dashboards y notificaciones por WhatsApp.

## Recomendacion arquitectonica

Se recomienda iniciar con un monolito modular usando **NestJS + Supabase**, organizado con paradigma **feature-first** separado por modulo. Este enfoque permite desarrollar rapido, mantener tipado fuerte y habilitar agent harnessing paralelo sin que varios agentes choquen sobre los mismos archivos.

Esta decision permite:

- Desarrollar mas rapido con modulos independientes.
- Mantener costos bajos sin microservicios innecesarios.
- Separar reglas de negocio por feature.
- Reducir conflictos entre agentes o desarrolladores trabajando en paralelo.
- Priorizar trazabilidad financiera, membresias, horarios y metricas antes de automatizaciones avanzadas.

## Arquitectura NestJS + Supabase

NestJS sera el backend/API principal del sistema. Supabase sera la plataforma de datos, autenticacion y soporte operativo.

- NestJS organiza casos de uso, validaciones, permisos, servicios por modulo e integracion WhatsApp.
- Supabase Postgres conserva los datos del negocio: alumnos, membresias, pagos, facturas basicas, liquidos, gastos, horarios y notificaciones.
- Supabase Auth maneja autenticacion y roles base del MVP: `superadmin`, `admin` y `cashier`.
- NestJS consume Supabase con cliente tipado y contratos explicitos.
- Supabase Storage queda como opcion futura para PDFs, comprobantes o archivos si el negocio lo requiere.
- Supabase Edge Functions quedan como opcion secundaria para aislar tareas especificas; la integracion principal de WhatsApp puede vivir en NestJS.

## Supabase CLI

El codigo aun no se inicia, pero cuando se autorice implementacion el flujo tecnico debe usar Supabase CLI:

- Inicializar Supabase con `supabase init`.
- Ejecutar ambiente local con `supabase start`.
- Trabajar cambios de base de datos como migraciones versionadas en `supabase/migrations`.
- Aplicar y verificar migraciones en local antes de subirlas.
- Generar tipos con `supabase gen types typescript --local` y guardar el resultado como `database.types.ts`.
- No modificar produccion directamente sin migracion registrada.

## Tipado fuerte

El desarrollo debe usar TypeScript strict desde el inicio.

- Los tipos de base de datos se generan desde el schema de Supabase.
- El cliente Supabase debe instanciarse como `createClient<Database>()`.
- NestJS debe usar DTOs tipados para entradas y salidas de cada modulo.
- Datos criticos como pagos, facturas, inventario, gastos, horarios y notificaciones no deben manejarse como objetos libres sin tipo.
- Las validaciones de cada feature deben vivir cerca de su feature para reducir inconsistencias.

## Feature-first por modulo

La estructura futura del codigo debe organizarse por funcionalidad, no por capas genericas enormes.

- `memberships-payments`: alumnos, planes, pagos, facturacion basica y vencimientos.
- `inventory-credits`: venta de liquidos, stock, movimientos y deudas de alumnos.
- `expenses-cash`: gastos, caja chica, cuenta principal y saldos.
- `schedules-classes`: horarios, clases, duraciones y asistencia.
- `employees-attendance`: recepcionistas, instructores, turnos y entrada/salida.
- `notifications-analytics`: WhatsApp, cumpleanos, recordatorios, metricas y dashboard.

Cada modulo debe agrupar controller, service, DTOs, types, validations, queries/repositories y pruebas futuras. Se deben evitar carpetas genericas grandes como `services/`, `utils/` o `components/` sin ownership claro; si existen, deben ser pequenas y compartidas solo para primitivas realmente transversales.

## Agent harnessing paralelo

Para desarrollar rapido, el proyecto debe prepararse para que varios agentes trabajen en paralelo por modulo.

- Cada agente toma ownership de una feature completa.
- Los contratos compartidos son el schema Supabase, los tipos generados, los DTOs publicos y las reglas de negocio documentadas.
- Los agentes no deben tocar archivos globales salvo que el contrato lo requiera.
- Las interfaces entre modulos deben ser explicitas para evitar dependencias circulares.
- Las pruebas o validaciones de cada modulo deben poder correr de forma aislada.
- El flujo operativo detallado vive en `docs/agent-harnessing.md` y define orquestador, agentes por rol, modelos, Reviewer/Test y QA.

## Modulos funcionales

### Membresias y pagos

Responsable de planes, pagos, metodos, divisas, periodos de membresia, vencimientos, renovaciones y facturacion basica interna.

Entidades sugeridas: `Alumno`, `Membresia`, `Plan`, `Pago`, `FacturaBasica`, `MetodoPago`, `Moneda`.

### Finanzas, gastos y caja

Responsable de ingresos, gastos fijos, variables, impuestos, imprevistos, pendientes, caja chica y cuenta principal.

Entidades sugeridas: `Gasto`, `CategoriaGasto`, `Fondo`, `MovimientoFondo`, `ResumenFinanciero`.

### Horarios y clases

Responsable de catalogo de clases, sesiones, duraciones, horarios de atencion y asistencia.

Entidades sugeridas: `Clase`, `Sesion`, `HorarioAtencion`, `AsistenciaAlumno`.

### Empleados e instructores

Responsable de recepcionistas, instructores, roles, turnos y entrada/salida.

Entidades sugeridas: `Empleado`, `Rol`, `Turno`, `AsistenciaEmpleado`.

### Inventario y creditos

Responsable de liquidos, stock, movimientos, ventas y deudas de alumnos relacionadas a inventario.

Entidades sugeridas: `ProductoLiquido`, `MovimientoInventario`, `VentaLiquido`, `CreditoAlumno`, `PagoCredito`.

### Notificaciones WhatsApp y dashboards

Responsable de recordatorios via WhatsApp, cumpleanos, avisos internos y metricas de negocio.

Entidades sugeridas: `Notificacion`, `PreferenciaNotificacion`, `Metrica`, `IndicadorDashboard`.

## WhatsApp

WhatsApp es canal obligatorio para el MVP. Debe cubrir recordatorios de pago, vencimientos de membresia y cumpleanos. La primera version debe separar la generacion/preparacion de mensajes del costo operativo de envio.

- Desarrollo incluido: configuracion de plantillas base, cola/lista de notificaciones, estado basico y flujo de envio.
- Costos externos no incluidos: tarifas de Meta, proveedor WhatsApp Business Platform, saldo de mensajes o suscripciones de terceros.
- Regla de alcance: no incluye chatbot ni respuestas automaticas conversacionales.

## Dashboard inicial

El dashboard inicial debe priorizar membresias, finanzas, liquidos y horarios.

- Membresias: alumnos activos, vencimientos proximos, membresias vencidas, pagos por plan y renovaciones.
- Finanzas: ingresos por periodo, gastos por categoria, utilidad aproximada, caja chica, cuenta principal y gastos pendientes.
- Liquidos: ventas, stock actual, salidas, deudas por alumno y bajo stock si se define minimo.
- Horarios y clases: clases programadas, asistencia y ocupacion basica.
- WhatsApp: recordatorios pendientes/preparados/enviados y cumpleanos del dia/mes.

## RBAC y usuarios del sistema

El MVP tendra 4 cuentas iniciales:

- 2 cajeros con rol `cashier`.
- 1 admin con rol `admin`.
- 1 superadmin con rol `superadmin`.

Equivalencias operativas:

- `superadmin` equivale al dueno o responsable maximo del sistema.
- `cashier` equivale a cajero/recepcionista operativo.
- Instructor existe como empleado/instructor registrado, pero no necesariamente como usuario con login en el MVP.

### Roles

- `superadmin`: control total, configuracion global, usuarios, roles, auditoria, metricas completas y operaciones criticas.
- `admin`: administracion operativa del gimnasio, dashboards, reportes, membresias, horarios, inventario, gastos y notificaciones.
- `cashier`: operacion diaria; cobra, emite facturas/recibos basicos, vende liquidos, registra asistencia y consulta informacion operativa.

### Matriz RBAC por modulo

- Membresias y pagos: `superadmin` y `admin` tienen control completo; `cashier` puede consultar alumnos y crear pagos, sin borrar ni editar historico critico.
- Facturacion basica: `superadmin` y `admin` tienen control completo; `cashier` puede emitir facturas/recibos, sin anular salvo flujo autorizado.
- Venta de liquidos e inventario: `cashier` puede vender y registrar salidas; `admin` y `superadmin` gestionan productos, stock y ajustes.
- Finanzas, gastos y caja: `cashier` registra movimientos permitidos; `admin` y `superadmin` ven reportes y gestionan gastos/caja.
- Horarios y asistencia: `cashier` registra asistencia; `admin` y `superadmin` gestionan horarios y clases.
- WhatsApp y notificaciones: `cashier` prepara/envia recordatorios operativos; `admin` y `superadmin` configuran mensajes y revisan estado.
- Dashboard: `cashier` ve una vista operativa limitada; `admin` y `superadmin` ven metricas completas.

### Implementacion RBAC en NestJS + Supabase

- Supabase Auth autentica usuarios.
- Una tabla/perfil de usuario guarda el rol interno como union literal: `superadmin | admin | cashier`.
- NestJS aplica guards/decorators por rol en controladores y casos de uso.
- Supabase RLS o politicas equivalentes protegen datos sensibles si existe acceso directo desde cliente.
- Acciones criticas deben quedar auditables: anular factura, ajuste de stock, cierre de caja y cambio de rol.
- Los permisos deben definirse por feature para mantener el paradigma feature-first.

## Reglas de negocio principales

- Mensualidad: 1100 C$.
- Clase individual: 100 C$.
- Plan semanal: 10 USD, pendiente de confirmacion.
- Plan de 15 dias: 15 USD, pendiente de confirmacion.
- Lunes a viernes: 6 am a 9 am y 3 pm a 9 pm.
- Sabado: 9 am a 12 pm.
- Clases regulares: 1 hora.
- Ballet y Urbano: 1.5 horas.
- Inventario limitado a liquidos.
- Venta permitida solo para liquidos.
- Facturacion basica interna para membresias y liquidos.
- Caja chica y cuenta principal deben separarse.

## Datos y trazabilidad

Los registros financieros y de inventario deben ser auditables. Un pago, factura basica, gasto o movimiento de inventario no deberia borrarse sin dejar rastro; las correcciones deben manejarse como ajustes.

En NestJS + Supabase, esta trazabilidad debe resolverse con tablas historicas, migraciones versionadas, tipos generados desde el schema y servicios tipados. Las operaciones sensibles deben pasar por casos de uso claros para evitar escrituras ambiguas.

## Integraciones futuras

- Pasarela o registro manual de tarjetas.
- Transferencias con referencia.
- SMS o correo como canales adicionales futuros.
- Exportacion de reportes a PDF o CSV.
- Facturacion fiscal/electronica si el negocio la solicita despues.

## Fuera del MVP

- Asistentes conversacionales.
- Automatizaciones avanzadas de atencion al cliente.
- Agentes que respondan preguntas del dueno o clientes.
- Facturacion fiscal avanzada o integracion tributaria.
- Canales adicionales a WhatsApp en el MVP.

## Riesgos

- La mezcla de C$ y USD puede afectar reportes y recibos si no se define moneda base.
- WhatsApp tiene costos variables por proveedor/mensaje que deben pagarse aparte del desarrollo.
- Dashboards necesitan metricas priorizadas para evitar reporteria abierta.
- Facturacion basica puede volverse facturacion fiscal si el negocio requiere cumplimiento formal.
- Si se agrega asistencia conversacional despues, debe cotizarse como fase independiente.
- Si se rompe el paradigma feature-first, el desarrollo paralelo se vuelve mas lento y conflictivo.
- Sin RBAC estricto, los cajeros podrian modificar datos financieros sensibles.
- Los roles deben permanecer tipados como `superadmin | admin | cashier` para evitar permisos ambiguos.

## Roadmap sugerido

1. Cerrar preguntas criticas y aprobar MVP.
2. Inicializar NestJS y Supabase CLI cuando se autorice codigo.
3. Crear migraciones base y generar tipos TypeScript desde Supabase.
4. Construir operacion base por features: alumnos, pagos, facturacion basica, horarios, clases y empleados.
5. Agregar venta de liquidos, inventario, creditos, gastos y caja.
6. Agregar dashboard centrado en membresias, finanzas, liquidos y horarios.
7. Agregar notificaciones via WhatsApp como requisito obligatorio.
