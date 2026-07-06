import { createParamDecorator, type ExecutionContext } from "@nestjs/common";
import type { Request } from "express";
import { isUserRole, type SessionUser } from "@fitstudio/shared";

export const CurrentUser = createParamDecorator((_data: unknown, context: ExecutionContext): SessionUser => {
  const request = context.switchToHttp().getRequest<Request>();
  const headerRole = request.header("x-user-role");
  const role = isUserRole(headerRole) ? headerRole : "cashier";
  const email = request.header("x-user-email") ?? `${role}@fitstudio.local`;

  return {
    id: request.header("x-user-id") ?? `local-${role}`,
    email,
    fullName: request.header("x-user-name") ?? `Local ${role}`,
    role
  };
});
