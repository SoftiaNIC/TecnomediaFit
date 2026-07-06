import { Injectable } from "@nestjs/common";
import { Inject } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { createTypedSupabaseClient, type TypedSupabaseClient } from "@fitstudio/database";

@Injectable()
export class SupabaseService {
  readonly adminClient: TypedSupabaseClient | null;

  constructor(@Inject(ConfigService) config: ConfigService) {
    const url = config.get<string>("SUPABASE_URL");
    const serviceRoleKey = config.get<string>("SUPABASE_SERVICE_ROLE_KEY");
    this.adminClient = url && serviceRoleKey ? createTypedSupabaseClient(url, serviceRoleKey) : null;
  }
}
