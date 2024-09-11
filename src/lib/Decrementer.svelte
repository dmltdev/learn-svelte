<script>
  import {count} from './store/stores';

  function decrement() {
    count.update(n => n - 1)
  }
</script>

<button on:click={decrement}>
  -
</button>