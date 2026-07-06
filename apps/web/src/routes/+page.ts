import { env } from "$env/dynamic/public";

export interface DashboardSummary {
  role: string;
  activeStudents: number;
  upcomingExpirations: number;
  expiredMemberships: number;
  liquidSales: number;
  scheduledClasses: number;
  sensitiveFinancialMetricsVisible: boolean;
}

export async function load({ fetch }) {
  const apiUrl = env.PUBLIC_API_URL || "http://localhost:3000";

  try {
    const [healthResponse, dashboardResponse] = await Promise.all([
      fetch(`${apiUrl}/health`),
      fetch(`${apiUrl}/api/v1/dashboard/summary`, {
        headers: {
          "x-user-role": "cashier"
        }
      })
    ]);

    return {
      apiUrl,
      health: healthResponse.ok ? await healthResponse.json() : { status: "unavailable" },
      dashboard: dashboardResponse.ok
        ? ((await dashboardResponse.json()) as DashboardSummary)
        : null
    };
  } catch {
    return {
      apiUrl,
      health: { status: "offline" },
      dashboard: null
    };
  }
}
