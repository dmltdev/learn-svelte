<script>
  import { getRandomNumber } from "../utils";

  let promise = getRandomNumber();

  function handleClick() {
    promise = getRandomNumber();
  }
</script>

<button on:click={handleClick}>generate random number</button>

{#await promise}
  <p>Waiting...</p>
{:then number}
  <p>The number is {number}</p>
{:catch error}
  <p class="error">{error.message}</p>
{/await}

<style>
  p.error {
    color: red;
  }
</style>
