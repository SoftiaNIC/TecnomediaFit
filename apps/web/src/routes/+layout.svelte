<script lang="ts">
  import "../styles.css";

  let { children } = $props();
</script>

<div class="app-shell">
  <aside class="sidebar" aria-label="Primary">
    <a class="brand" href="/">
      <span class="brand-mark">FS</span>
      <span>
        <strong>Fit Studio</strong>
        <small>Operations</small>
      </span>
    </a>
    <nav>
      <a href="/">Dashboard</a>
      <a href="/login">Login</a>
    </nav>
  </aside>
  <main>
    {@render children()}
  </main>
</div>
