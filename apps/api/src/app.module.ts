import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AuthRbacModule } from "./features/auth-rbac/auth-rbac.module.js";
import { EmployeesAttendanceModule } from "./features/employees-attendance/employees-attendance.module.js";
import { ExpensesCashModule } from "./features/expenses-cash/expenses-cash.module.js";
import { InventoryCreditsModule } from "./features/inventory-credits/inventory-credits.module.js";
import { MembershipsPaymentsModule } from "./features/memberships-payments/memberships-payments.module.js";
import { NotificationsAnalyticsModule } from "./features/notifications-analytics/notifications-analytics.module.js";
import { SchedulesClassesModule } from "./features/schedules-classes/schedules-classes.module.js";
import { HealthController } from "./health.controller.js";
import { SupabaseModule } from "./shared/supabase/supabase.module.js";

@Module({
  controllers: [HealthController],
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SupabaseModule,
    AuthRbacModule,
    MembershipsPaymentsModule,
    InventoryCreditsModule,
    ExpensesCashModule,
    SchedulesClassesModule,
    EmployeesAttendanceModule,
    NotificationsAnalyticsModule
  ]
})
export class AppModule {}
