import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { Roles } from "../auth-rbac/roles.decorator.js";
import { RolesGuard } from "../auth-rbac/roles.guard.js";
import { AdjustStockDto } from "./dto/adjust-stock.dto.js";

@Controller("api/v1/inventory")
@UseGuards(RolesGuard)
export class InventoryCreditsController {
  @Post("manual-adjustments")
  @Roles("admin", "superadmin")
  createManualAdjustment(@Body() dto: AdjustStockDto): { status: "accepted"; productId: string } {
    return { status: "accepted", productId: dto.productId };
  }
}
