import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./database.types.js";

export type TypedSupabaseClient = SupabaseClient<Database>;

export function createTypedSupabaseClient(url: string, key: string): TypedSupabaseClient {
  return createClient<Database>(url, key, {
    auth: {
      persistSession: false
    }
  });
}

export type { Database } from "./database.types.js";
