import { Controller, Get, UseGuards } from "@nestjs/common";
import type { UserRole } from "@fitstudio/shared";
import { CurrentUser } from "../auth-rbac/current-user.decorator.js";
import { RolesGuard } from "../auth-rbac/roles.guard.js";

interface DashboardSummary {
  role: UserRole;
  activeStudents: number;
  upcomingExpirations: number;
  expiredMemberships: number;
  liquidSales: number;
  scheduledClasses: number;
  sensitiveFinancialMetricsVisible: boolean;
}

@Controller("api/v1/dashboard")
@UseGuards(RolesGuard)
export class NotificationsAnalyticsController {
  @Get("summary")
  getSummary(@CurrentUser() user: { role: UserRole }): DashboardSummary {
    const sensitiveFinancialMetricsVisible = user.role === "admin" || user.role === "superadmin";

    return {
      role: user.role,
      activeStudents: 0,
      upcomingExpirations: 0,
      expiredMemberships: 0,
      liquidSales: 0,
      scheduledClasses: 0,
      sensitiveFinancialMetricsVisible
    };
  }
}
