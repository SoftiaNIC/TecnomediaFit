import { describe, expect, it } from "vitest";
import { canManageRoles, canPerformSensitiveFinancialAction, isUserRole } from "./index.js";

describe("shared RBAC helpers", () => {
  it("keeps cashier out of role management and sensitive financial actions", () => {
    expect(isUserRole("cashier")).toBe(true);
    expect(canManageRoles("cashier")).toBe(false);
    expect(canPerformSensitiveFinancialAction("cashier")).toBe(false);
  });
});
