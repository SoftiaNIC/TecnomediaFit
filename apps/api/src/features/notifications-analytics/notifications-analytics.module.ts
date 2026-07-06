import { Module } from "@nestjs/common";
import { NotificationsAnalyticsController } from "./notifications-analytics.controller.js";

@Module({
  controllers: [NotificationsAnalyticsController]
})
export class NotificationsAnalyticsModule {}
