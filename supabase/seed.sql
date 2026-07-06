insert into public.profiles (email, full_name, role)
values
  ('superadmin@fitstudio.local', 'Superadmin Fit Studio', 'superadmin'),
  ('admin@fitstudio.local', 'Admin Fit Studio', 'admin'),
  ('cashier1@fitstudio.local', 'Cajero 1 Fit Studio', 'cashier'),
  ('cashier2@fitstudio.local', 'Cajero 2 Fit Studio', 'cashier')
on conflict (email) do nothing;

insert into public.employees (profile_id, full_name, kind)
select id, full_name, case role when 'cashier' then 'cashier'::public.employee_kind else 'admin'::public.employee_kind end
from public.profiles
on conflict do nothing;

insert into public.membership_plans (name, duration_days, price, currency)
values
  ('Mensualidad', 30, 1100, 'C$'),
  ('Clase individual', 1, 100, 'C$'),
  ('Plan semanal', 7, 10, 'USD'),
  ('Plan quincenal', 15, 15, 'USD')
on conflict (name) do nothing;

insert into public.class_types (name, default_duration_minutes)
values
  ('Spinning', 60),
  ('Zumba', 60),
  ('Acondicionamiento fisico', 60),
  ('Ritmo Latino', 60),
  ('Urbano', 90),
  ('Ballet', 90)
on conflict (name) do nothing;

insert into public.funds (name, kind, currency, opening_balance)
values
  ('Caja chica', 'petty_cash', 'C$', 0),
  ('Cuenta principal', 'main_account', 'C$', 0)
on conflict (name) do nothing;
