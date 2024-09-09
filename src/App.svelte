<script lang="ts">
  import Tick from "./lib/Tick.svelte";

  const pkg = {
    name: "svelte",
    speed: "blazing",
    version: 4,
    website: "https://svelte.dev",
  };
</script>

<main>
  <div class="card">
    <Tick />
  </div>
</main>

<style>
  main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
