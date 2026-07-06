export const roles = ["superadmin", "admin", "cashier"] as const;
export type UserRole = (typeof roles)[number];

export const currencies = ["C$", "USD"] as const;
export type Currency = (typeof currencies)[number];

export const paymentMethods = ["cash", "card", "transfer"] as const;
export type PaymentMethod = (typeof paymentMethods)[number];

export const notificationChannels = ["whatsapp"] as const;
export type NotificationChannel = (typeof notificationChannels)[number];

export const notificationStatuses = ["pending", "prepared", "sent", "failed"] as const;
export type NotificationStatus = (typeof notificationStatuses)[number];

export const classCatalog = [
  { name: "Spinning", defaultDurationMinutes: 60 },
  { name: "Zumba", defaultDurationMinutes: 60 },
  { name: "Acondicionamiento fisico", defaultDurationMinutes: 60 },
  { name: "Ritmo Latino", defaultDurationMinutes: 60 },
  { name: "Urbano", defaultDurationMinutes: 90 },
  { name: "Ballet", defaultDurationMinutes: 90 }
] as const;

export interface SessionUser {
  id: string;
  email: string;
  role: UserRole;
  fullName: string;
}

export function isUserRole(value: string | undefined): value is UserRole {
  return roles.includes(value as UserRole);
}

export function canManageRoles(role: UserRole): boolean {
  return role === "superadmin";
}

export function canPerformSensitiveFinancialAction(role: UserRole): boolean {
  return role === "superadmin" || role === "admin";
}
