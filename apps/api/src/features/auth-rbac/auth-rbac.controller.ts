import { Body, Controller, Get, Patch, UseGuards } from "@nestjs/common";
import type { SessionUser } from "@fitstudio/shared";
import { CurrentUser } from "./current-user.decorator.js";
import { Roles } from "./roles.decorator.js";
import { RolesGuard } from "./roles.guard.js";
import { ChangeRoleDto } from "./dto/change-role.dto.js";

@Controller("api/v1/auth")
@UseGuards(RolesGuard)
export class AuthRbacController {
  @Get("me")
  getMe(@CurrentUser() user: SessionUser): SessionUser {
    return user;
  }

  @Patch("roles")
  @Roles("superadmin")
  changeRole(@Body() dto: ChangeRoleDto): { status: "accepted"; targetProfileId: string; role: string } {
    return { status: "accepted", targetProfileId: dto.profileId, role: dto.role };
  }
}
