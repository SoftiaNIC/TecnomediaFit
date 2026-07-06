import { Module } from "@nestjs/common";
import { SupabaseService } from "./supabase.service.js";

@Module({
  exports: [SupabaseService],
  providers: [SupabaseService]
})
export class SupabaseModule {}
