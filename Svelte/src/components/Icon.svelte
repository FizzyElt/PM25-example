<script>
  import FaGrin from 'svelte-icons/fa/FaGrin.svelte';
  import FaFrown from 'svelte-icons/fa/FaFrown.svelte';
  import FaDizzy from 'svelte-icons/fa/FaDizzy.svelte';
  import FaMeh from 'svelte-icons/fa/FaMeh.svelte';
  export let pm25 = 0;
</script>

<style>
</style>

<div class="icon">
  {#if pm25 >= 250}
    <FaDizzy />
  {:else if pm25 >= 54}
    <FaFrown />
  {:else if pm25 > 15}
    <FaMeh />
  {:else}
    <FaGrin />
  {/if}
</div>
