<script lang="ts">
  let m = { x: 0, y: 0 };

  function handleMove(event: PointerEvent) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<div on:pointermove={handleMove}>
  The pointer is at {m.x} x {m.y}
</div>

<!-- Below is an example of an inline event handler -->
<!-- <div
  on:pointermove={e => {
    m = { x: e.clientX, y: e.clientY };
  }}
>
  The pointer is at {m.x} x {m.y}
</div> -->

<style>
  div {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
</style>
