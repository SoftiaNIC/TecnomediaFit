create extension if not exists "pgcrypto";

create type public.app_role as enum ('superadmin', 'admin', 'cashier');
create type public.currency_code as enum ('C$', 'USD');
create type public.payment_method as enum ('cash', 'card', 'transfer');
create type public.employee_kind as enum ('cashier', 'admin', 'instructor');
create type public.notification_channel as enum ('whatsapp');
create type public.notification_status as enum ('pending', 'prepared', 'sent', 'failed');
create type public.fund_kind as enum ('petty_cash', 'main_account');
create type public.expense_status as enum ('pending', 'paid', 'cancelled');
create type public.inventory_movement_kind as enum ('purchase', 'sale', 'credit_consumption', 'manual_adjustment', 'correction');

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  email text not null unique,
  full_name text not null,
  role public.app_role not null,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.students (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text,
  birth_date date,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.membership_plans (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  duration_days integer not null check (duration_days > 0),
  price numeric(12, 2) not null check (price >= 0),
  currency public.currency_code not null default 'C$',
  is_active boolean not null default true
);

create table public.memberships (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id),
  plan_id uuid not null references public.membership_plans(id),
  starts_on date not null,
  ends_on date not null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  check (ends_on >= starts_on)
);

create table public.payments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references public.students(id),
  membership_id uuid references public.memberships(id),
  amount numeric(12, 2) not null check (amount >= 0),
  currency public.currency_code not null,
  method public.payment_method not null,
  reference_number text,
  concept text not null,
  received_by uuid references public.profiles(id),
  paid_at timestamptz not null default now(),
  voided_at timestamptz,
  void_reason text
);

create table public.internal_receipts (
  id uuid primary key default gen_random_uuid(),
  payment_id uuid not null references public.payments(id),
  receipt_number text not null unique,
  student_name text,
  concept text not null,
  amount numeric(12, 2) not null,
  currency public.currency_code not null,
  method public.payment_method not null,
  issued_at timestamptz not null default now(),
  voided_at timestamptz
);

create table public.liquid_products (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  sale_price numeric(12, 2) not null default 0,
  cost numeric(12, 2),
  currency public.currency_code not null default 'C$',
  stock_quantity integer not null default 0 check (stock_quantity >= 0),
  low_stock_threshold integer,
  is_active boolean not null default true
);

create table public.inventory_movements (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.liquid_products(id),
  kind public.inventory_movement_kind not null,
  quantity integer not null check (quantity > 0),
  unit_price numeric(12, 2),
  currency public.currency_code,
  reason text,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  correction_of uuid references public.inventory_movements(id)
);

create table public.student_debts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id),
  product_id uuid references public.liquid_products(id),
  amount numeric(12, 2) not null check (amount >= 0),
  currency public.currency_code not null,
  status text not null default 'pending',
  payment_id uuid references public.payments(id),
  created_at timestamptz not null default now(),
  paid_at timestamptz
);

create table public.funds (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  kind public.fund_kind not null,
  currency public.currency_code not null default 'C$',
  opening_balance numeric(12, 2) not null default 0
);

create table public.expenses (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  description text not null,
  amount numeric(12, 2) not null check (amount >= 0),
  currency public.currency_code not null,
  status public.expense_status not null default 'pending',
  due_on date,
  paid_at timestamptz,
  fund_id uuid references public.funds(id),
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.fund_movements (
  id uuid primary key default gen_random_uuid(),
  fund_id uuid not null references public.funds(id),
  payment_id uuid references public.payments(id),
  expense_id uuid references public.expenses(id),
  amount numeric(12, 2) not null,
  currency public.currency_code not null,
  reason text not null,
  created_at timestamptz not null default now()
);

create table public.class_types (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  default_duration_minutes integer not null check (default_duration_minutes > 0),
  is_active boolean not null default true
);

create table public.employees (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id),
  full_name text not null,
  kind public.employee_kind not null,
  phone text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.class_sessions (
  id uuid primary key default gen_random_uuid(),
  class_type_id uuid not null references public.class_types(id),
  instructor_employee_id uuid references public.employees(id),
  starts_at timestamptz not null,
  duration_minutes integer not null check (duration_minutes > 0),
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.student_attendance (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.class_sessions(id),
  student_id uuid not null references public.students(id),
  checked_in_by uuid references public.profiles(id),
  checked_in_at timestamptz not null default now(),
  unique (session_id, student_id)
);

create table public.employee_attendance (
  id uuid primary key default gen_random_uuid(),
  employee_id uuid not null references public.employees(id),
  shift_label text,
  checked_in_at timestamptz not null default now(),
  checked_out_at timestamptz
);

create table public.notification_queue (
  id uuid primary key default gen_random_uuid(),
  channel public.notification_channel not null default 'whatsapp',
  student_id uuid references public.students(id),
  recipient_phone text not null,
  message text not null,
  status public.notification_status not null default 'pending',
  prepared_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  sent_at timestamptz,
  provider_message_id text,
  error_message text
);

alter table public.profiles enable row level security;
alter table public.students enable row level security;
alter table public.membership_plans enable row level security;
alter table public.memberships enable row level security;
alter table public.payments enable row level security;
alter table public.internal_receipts enable row level security;
alter table public.liquid_products enable row level security;
alter table public.inventory_movements enable row level security;
alter table public.student_debts enable row level security;
alter table public.funds enable row level security;
alter table public.expenses enable row level security;
alter table public.fund_movements enable row level security;
alter table public.class_types enable row level security;
alter table public.employees enable row level security;
alter table public.class_sessions enable row level security;
alter table public.student_attendance enable row level security;
alter table public.employee_attendance enable row level security;
alter table public.notification_queue enable row level security;
