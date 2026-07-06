export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          extensions?: Json
          operationName?: string
          query?: string
          variables?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      class_sessions: {
        Row: {
          class_type_id: string
          created_at: string
          created_by: string | null
          duration_minutes: number
          id: string
          instructor_employee_id: string | null
          starts_at: string
        }
        Insert: {
          class_type_id: string
          created_at?: string
          created_by?: string | null
          duration_minutes: number
          id?: string
          instructor_employee_id?: string | null
          starts_at: string
        }
        Update: {
          class_type_id?: string
          created_at?: string
          created_by?: string | null
          duration_minutes?: number
          id?: string
          instructor_employee_id?: string | null
          starts_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_sessions_class_type_id_fkey"
            columns: ["class_type_id"]
            isOneToOne: false
            referencedRelation: "class_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_sessions_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_sessions_instructor_employee_id_fkey"
            columns: ["instructor_employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      class_types: {
        Row: {
          default_duration_minutes: number
          id: string
          is_active: boolean
          name: string
        }
        Insert: {
          default_duration_minutes: number
          id?: string
          is_active?: boolean
          name: string
        }
        Update: {
          default_duration_minutes?: number
          id?: string
          is_active?: boolean
          name?: string
        }
        Relationships: []
      }
      employee_attendance: {
        Row: {
          checked_in_at: string
          checked_out_at: string | null
          employee_id: string
          id: string
          shift_label: string | null
        }
        Insert: {
          checked_in_at?: string
          checked_out_at?: string | null
          employee_id: string
          id?: string
          shift_label?: string | null
        }
        Update: {
          checked_in_at?: string
          checked_out_at?: string | null
          employee_id?: string
          id?: string
          shift_label?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employee_attendance_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: false
            referencedRelation: "employees"
            referencedColumns: ["id"]
          },
        ]
      }
      employees: {
        Row: {
          created_at: string
          full_name: string
          id: string
          is_active: boolean
          kind: Database["public"]["Enums"]["employee_kind"]
          phone: string | null
          profile_id: string | null
        }
        Insert: {
          created_at?: string
          full_name: string
          id?: string
          is_active?: boolean
          kind: Database["public"]["Enums"]["employee_kind"]
          phone?: string | null
          profile_id?: string | null
        }
        Update: {
          created_at?: string
          full_name?: string
          id?: string
          is_active?: boolean
          kind?: Database["public"]["Enums"]["employee_kind"]
          phone?: string | null
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "employees_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      expenses: {
        Row: {
          amount: number
          category: string
          created_at: string
          created_by: string | null
          currency: Database["public"]["Enums"]["currency_code"]
          description: string
          due_on: string | null
          fund_id: string | null
          id: string
          paid_at: string | null
          status: Database["public"]["Enums"]["expense_status"]
        }
        Insert: {
          amount: number
          category: string
          created_at?: string
          created_by?: string | null
          currency: Database["public"]["Enums"]["currency_code"]
          description: string
          due_on?: string | null
          fund_id?: string | null
          id?: string
          paid_at?: string | null
          status?: Database["public"]["Enums"]["expense_status"]
        }
        Update: {
          amount?: number
          category?: string
          created_at?: string
          created_by?: string | null
          currency?: Database["public"]["Enums"]["currency_code"]
          description?: string
          due_on?: string | null
          fund_id?: string | null
          id?: string
          paid_at?: string | null
          status?: Database["public"]["Enums"]["expense_status"]
        }
        Relationships: [
          {
            foreignKeyName: "expenses_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "expenses_fund_id_fkey"
            columns: ["fund_id"]
            isOneToOne: false
            referencedRelation: "funds"
            referencedColumns: ["id"]
          },
        ]
      }
      fund_movements: {
        Row: {
          amount: number
          created_at: string
          currency: Database["public"]["Enums"]["currency_code"]
          expense_id: string | null
          fund_id: string
          id: string
          payment_id: string | null
          reason: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency: Database["public"]["Enums"]["currency_code"]
          expense_id?: string | null
          fund_id: string
          id?: string
          payment_id?: string | null
          reason: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: Database["public"]["Enums"]["currency_code"]
          expense_id?: string | null
          fund_id?: string
          id?: string
          payment_id?: string | null
          reason?: string
        }
        Relationships: [
          {
            foreignKeyName: "fund_movements_expense_id_fkey"
            columns: ["expense_id"]
            isOneToOne: false
            referencedRelation: "expenses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fund_movements_fund_id_fkey"
            columns: ["fund_id"]
            isOneToOne: false
            referencedRelation: "funds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fund_movements_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      funds: {
        Row: {
          currency: Database["public"]["Enums"]["currency_code"]
          id: string
          kind: Database["public"]["Enums"]["fund_kind"]
          name: string
          opening_balance: number
        }
        Insert: {
          currency?: Database["public"]["Enums"]["currency_code"]
          id?: string
          kind: Database["public"]["Enums"]["fund_kind"]
          name: string
          opening_balance?: number
        }
        Update: {
          currency?: Database["public"]["Enums"]["currency_code"]
          id?: string
          kind?: Database["public"]["Enums"]["fund_kind"]
          name?: string
          opening_balance?: number
        }
        Relationships: []
      }
      internal_receipts: {
        Row: {
          amount: number
          concept: string
          currency: Database["public"]["Enums"]["currency_code"]
          id: string
          issued_at: string
          method: Database["public"]["Enums"]["payment_method"]
          payment_id: string
          receipt_number: string
          student_name: string | null
          voided_at: string | null
        }
        Insert: {
          amount: number
          concept: string
          currency: Database["public"]["Enums"]["currency_code"]
          id?: string
          issued_at?: string
          method: Database["public"]["Enums"]["payment_method"]
          payment_id: string
          receipt_number: string
          student_name?: string | null
          voided_at?: string | null
        }
        Update: {
          amount?: number
          concept?: string
          currency?: Database["public"]["Enums"]["currency_code"]
          id?: string
          issued_at?: string
          method?: Database["public"]["Enums"]["payment_method"]
          payment_id?: string
          receipt_number?: string
          student_name?: string | null
          voided_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "internal_receipts_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_movements: {
        Row: {
          correction_of: string | null
          created_at: string
          created_by: string | null
          currency: Database["public"]["Enums"]["currency_code"] | null
          id: string
          kind: Database["public"]["Enums"]["inventory_movement_kind"]
          product_id: string
          quantity: number
          reason: string | null
          unit_price: number | null
        }
        Insert: {
          correction_of?: string | null
          created_at?: string
          created_by?: string | null
          currency?: Database["public"]["Enums"]["currency_code"] | null
          id?: string
          kind: Database["public"]["Enums"]["inventory_movement_kind"]
          product_id: string
          quantity: number
          reason?: string | null
          unit_price?: number | null
        }
        Update: {
          correction_of?: string | null
          created_at?: string
          created_by?: string | null
          currency?: Database["public"]["Enums"]["currency_code"] | null
          id?: string
          kind?: Database["public"]["Enums"]["inventory_movement_kind"]
          product_id?: string
          quantity?: number
          reason?: string | null
          unit_price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_movements_correction_of_fkey"
            columns: ["correction_of"]
            isOneToOne: false
            referencedRelation: "inventory_movements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_movements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_movements_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "liquid_products"
            referencedColumns: ["id"]
          },
        ]
      }
      liquid_products: {
        Row: {
          cost: number | null
          currency: Database["public"]["Enums"]["currency_code"]
          id: string
          is_active: boolean
          low_stock_threshold: number | null
          name: string
          sale_price: number
          stock_quantity: number
        }
        Insert: {
          cost?: number | null
          currency?: Database["public"]["Enums"]["currency_code"]
          id?: string
          is_active?: boolean
          low_stock_threshold?: number | null
          name: string
          sale_price?: number
          stock_quantity?: number
        }
        Update: {
          cost?: number | null
          currency?: Database["public"]["Enums"]["currency_code"]
          id?: string
          is_active?: boolean
          low_stock_threshold?: number | null
          name?: string
          sale_price?: number
          stock_quantity?: number
        }
        Relationships: []
      }
      membership_plans: {
        Row: {
          currency: Database["public"]["Enums"]["currency_code"]
          duration_days: number
          id: string
          is_active: boolean
          name: string
          price: number
        }
        Insert: {
          currency?: Database["public"]["Enums"]["currency_code"]
          duration_days: number
          id?: string
          is_active?: boolean
          name: string
          price: number
        }
        Update: {
          currency?: Database["public"]["Enums"]["currency_code"]
          duration_days?: number
          id?: string
          is_active?: boolean
          name?: string
          price?: number
        }
        Relationships: []
      }
      memberships: {
        Row: {
          created_at: string
          ends_on: string
          id: string
          plan_id: string
          starts_on: string
          status: string
          student_id: string
        }
        Insert: {
          created_at?: string
          ends_on: string
          id?: string
          plan_id: string
          starts_on: string
          status?: string
          student_id: string
        }
        Update: {
          created_at?: string
          ends_on?: string
          id?: string
          plan_id?: string
          starts_on?: string
          status?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "memberships_plan_id_fkey"
            columns: ["plan_id"]
            isOneToOne: false
            referencedRelation: "membership_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "memberships_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_queue: {
        Row: {
          channel: Database["public"]["Enums"]["notification_channel"]
          created_at: string
          error_message: string | null
          id: string
          message: string
          prepared_by: string | null
          provider_message_id: string | null
          recipient_phone: string
          sent_at: string | null
          status: Database["public"]["Enums"]["notification_status"]
          student_id: string | null
        }
        Insert: {
          channel?: Database["public"]["Enums"]["notification_channel"]
          created_at?: string
          error_message?: string | null
          id?: string
          message: string
          prepared_by?: string | null
          provider_message_id?: string | null
          recipient_phone: string
          sent_at?: string | null
          status?: Database["public"]["Enums"]["notification_status"]
          student_id?: string | null
        }
        Update: {
          channel?: Database["public"]["Enums"]["notification_channel"]
          created_at?: string
          error_message?: string | null
          id?: string
          message?: string
          prepared_by?: string | null
          provider_message_id?: string | null
          recipient_phone?: string
          sent_at?: string | null
          status?: Database["public"]["Enums"]["notification_status"]
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_queue_prepared_by_fkey"
            columns: ["prepared_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notification_queue_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          concept: string
          currency: Database["public"]["Enums"]["currency_code"]
          id: string
          membership_id: string | null
          method: Database["public"]["Enums"]["payment_method"]
          paid_at: string
          received_by: string | null
          reference_number: string | null
          student_id: string | null
          void_reason: string | null
          voided_at: string | null
        }
        Insert: {
          amount: number
          concept: string
          currency: Database["public"]["Enums"]["currency_code"]
          id?: string
          membership_id?: string | null
          method: Database["public"]["Enums"]["payment_method"]
          paid_at?: string
          received_by?: string | null
          reference_number?: string | null
          student_id?: string | null
          void_reason?: string | null
          voided_at?: string | null
        }
        Update: {
          amount?: number
          concept?: string
          currency?: Database["public"]["Enums"]["currency_code"]
          id?: string
          membership_id?: string | null
          method?: Database["public"]["Enums"]["payment_method"]
          paid_at?: string
          received_by?: string | null
          reference_number?: string | null
          student_id?: string | null
          void_reason?: string | null
          voided_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_membership_id_fkey"
            columns: ["membership_id"]
            isOneToOne: false
            referencedRelation: "memberships"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_received_by_fkey"
            columns: ["received_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          auth_user_id: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          is_active: boolean
          role: Database["public"]["Enums"]["app_role"]
          updated_at: string
        }
        Insert: {
          auth_user_id?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          is_active?: boolean
          role: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Update: {
          auth_user_id?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          is_active?: boolean
          role?: Database["public"]["Enums"]["app_role"]
          updated_at?: string
        }
        Relationships: []
      }
      student_attendance: {
        Row: {
          checked_in_at: string
          checked_in_by: string | null
          id: string
          session_id: string
          student_id: string
        }
        Insert: {
          checked_in_at?: string
          checked_in_by?: string | null
          id?: string
          session_id: string
          student_id: string
        }
        Update: {
          checked_in_at?: string
          checked_in_by?: string | null
          id?: string
          session_id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_attendance_checked_in_by_fkey"
            columns: ["checked_in_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_attendance_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "class_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_attendance_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      student_debts: {
        Row: {
          amount: number
          created_at: string
          currency: Database["public"]["Enums"]["currency_code"]
          id: string
          paid_at: string | null
          payment_id: string | null
          product_id: string | null
          status: string
          student_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency: Database["public"]["Enums"]["currency_code"]
          id?: string
          paid_at?: string | null
          payment_id?: string | null
          product_id?: string | null
          status?: string
          student_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: Database["public"]["Enums"]["currency_code"]
          id?: string
          paid_at?: string | null
          payment_id?: string | null
          product_id?: string | null
          status?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_debts_payment_id_fkey"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_debts_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "liquid_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_debts_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          birth_date: string | null
          created_at: string
          full_name: string
          id: string
          is_active: boolean
          phone: string | null
        }
        Insert: {
          birth_date?: string | null
          created_at?: string
          full_name: string
          id?: string
          is_active?: boolean
          phone?: string | null
        }
        Update: {
          birth_date?: string | null
          created_at?: string
          full_name?: string
          id?: string
          is_active?: boolean
          phone?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      app_role: "superadmin" | "admin" | "cashier"
      currency_code: "C$" | "USD"
      employee_kind: "cashier" | "admin" | "instructor"
      expense_status: "pending" | "paid" | "cancelled"
      fund_kind: "petty_cash" | "main_account"
      inventory_movement_kind:
        | "purchase"
        | "sale"
        | "credit_consumption"
        | "manual_adjustment"
        | "correction"
      notification_channel: "whatsapp"
      notification_status: "pending" | "prepared" | "sent" | "failed"
      payment_method: "cash" | "card" | "transfer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      app_role: ["superadmin", "admin", "cashier"],
      currency_code: ["C$", "USD"],
      employee_kind: ["cashier", "admin", "instructor"],
      expense_status: ["pending", "paid", "cancelled"],
      fund_kind: ["petty_cash", "main_account"],
      inventory_movement_kind: [
        "purchase",
        "sale",
        "credit_consumption",
        "manual_adjustment",
        "correction",
      ],
      notification_channel: ["whatsapp"],
      notification_status: ["pending", "prepared", "sent", "failed"],
      payment_method: ["cash", "card", "transfer"],
    },
  },
} as const

