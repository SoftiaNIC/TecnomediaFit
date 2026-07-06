<script lang="ts">
  import { roles } from "@fitstudio/shared";

  let selectedRole = $state("cashier");
</script>

<svelte:head>
  <title>Fit Studio Login</title>
</svelte:head>

<section class="auth-panel">
  <h1>Sesion local</h1>
  <p>Shell de autenticacion para validar RBAC local antes de conectar el flujo completo de Supabase Auth.</p>

  <label>
    Rol de prueba
    <select bind:value={selectedRole}>
      {#each roles as role}
        <option value={role}>{role}</option>
      {/each}
    </select>
  </label>

  <a class="button" href="/">Entrar como {selectedRole}</a>
</section>
