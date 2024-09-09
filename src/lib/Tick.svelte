<script lang="ts">
  import { tick } from "svelte";

  let text = `Select some text and hit the tab key to toggle uppercase`;
  let textarea: HTMLTextAreaElement | undefined;

  async function handleKeydown(event: KeyboardEvent) {
    if (event.key !== "Tab" || !textarea) return;

    event.preventDefault();

    const { selectionStart, selectionEnd, value } = textarea;
    const selection = value.slice(selectionStart, selectionEnd);

    const replacement = /[a-z]/.test(selection)
      ? selection.toUpperCase()
      : selection.toLowerCase();

    text =
      value.slice(0, selectionStart) + replacement + value.slice(selectionEnd);

    await tick();
    textarea.selectionStart = selectionStart;
    textarea.selectionEnd = selectionEnd;
  }
</script>

<textarea
  rows="5"
  bind:this={textarea}
  value={text}
  on:keydown={handleKeydown}
></textarea>

<style>
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
  }
</style>
