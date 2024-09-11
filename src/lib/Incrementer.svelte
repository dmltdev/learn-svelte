<script>
  import {count} from './store/stores';

  function increment() {
    count.update(n => n + 1)
  }
</script>

<button on:click={increment}>
  +
</button>