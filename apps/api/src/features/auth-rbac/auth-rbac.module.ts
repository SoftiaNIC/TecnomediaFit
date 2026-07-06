import { Module } from "@nestjs/common";
import { AuthRbacController } from "./auth-rbac.controller.js";

@Module({
  controllers: [AuthRbacController]
})
export class AuthRbacModule {}
