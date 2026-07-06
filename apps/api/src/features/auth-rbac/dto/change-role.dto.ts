import { IsIn, IsUUID } from "class-validator";
import { roles, type UserRole } from "@fitstudio/shared";

export class ChangeRoleDto {
  @IsUUID()
  profileId!: string;

  @IsIn(roles)
  role!: UserRole;
}
