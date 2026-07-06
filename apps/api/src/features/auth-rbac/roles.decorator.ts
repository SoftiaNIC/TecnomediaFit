import { SetMetadata } from "@nestjs/common";
import type { UserRole } from "@fitstudio/shared";

export const ROLE_METADATA_KEY = "fitstudio:roles";

export function Roles(...roles: UserRole[]) {
  return SetMetadata(ROLE_METADATA_KEY, roles);
}
