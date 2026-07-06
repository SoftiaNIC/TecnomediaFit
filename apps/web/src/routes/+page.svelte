<script lang="ts">
  let { data } = $props();

  const cards = $derived([
    ["Alumnos activos", data.dashboard?.activeStudents ?? 0],
    ["Vencen pronto", data.dashboard?.upcomingExpirations ?? 0],
    ["Membresias vencidas", data.dashboard?.expiredMemberships ?? 0],
    ["Ventas de liquidos", data.dashboard?.liquidSales ?? 0],
    ["Clases programadas", data.dashboard?.scheduledClasses ?? 0]
  ]);
</script>

<svelte:head>
  <title>Fit Studio Dashboard</title>
</svelte:head>

<section class="toolbar">
  <div>
    <h1>Dashboard operativo</h1>
    <p>API: {data.apiUrl} · estado {data.health.status}</p>
  </div>
  <a class="button" href="/login">Sesion local</a>
</section>

<section class="metric-grid">
  {#each cards as [label, value]}
    <article class="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  {/each}
</section>

<section class="panel">
  <h2>Vista de cajero</h2>
  <p>
    Las metricas financieras sensibles estan
    {data.dashboard?.sensitiveFinancialMetricsVisible ? "visibles" : "ocultas"} para este rol.
  </p>
</section>
