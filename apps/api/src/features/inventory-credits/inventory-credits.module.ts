import { Module } from "@nestjs/common";
import { InventoryCreditsController } from "./inventory-credits.controller.js";

@Module({
  controllers: [InventoryCreditsController]
})
export class InventoryCreditsModule {}
