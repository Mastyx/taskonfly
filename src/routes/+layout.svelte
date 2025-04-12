<!-- routes/+layout.svelte -->
<script>
  import '../app.css';
  import { theme } from '$lib/stores/theme.js';

  function toggleTheme() {
    theme.update(t => t === 'light' ? 'dark' : 'light');
  }
</script>

<div class="app">
  <header class="top-bar">
    <button on:click={toggleTheme} title="Cambia tema">🌓</button>
  </header>
  <slot />
</div>

<style>
  .app {
    min-height: 100vh;
    background-color: var(--bg);
    color: var(--text);
  }

  .top-bar {
    display: flex;
    justify-content: flex-end;
    padding: 10px 20px;
  }

  .top-bar button {
    font-size: 20px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text);
  }
</style>

