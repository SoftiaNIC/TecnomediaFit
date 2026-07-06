import { IsInt, IsString, IsUUID, Min } from "class-validator";

export class AdjustStockDto {
  @IsUUID()
  productId!: string;

  @IsInt()
  @Min(1)
  quantity!: number;

  @IsString()
  reason!: string;
}
