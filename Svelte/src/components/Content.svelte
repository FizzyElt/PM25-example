<script>
  import PM25Card from './PM25Card.svelte';
  import { flip } from 'svelte/animate';
  export let items;
</script>

<style>
  .container {
    display: flex;
    margin: auto;
    max-width: 1200px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>

<ul class="container">
  {#each items as item (item.county + item.Site)}
    <div animate:flip={{ duration: 500 }}>
      <PM25Card {item} />
    </div>
  {/each}
</ul>
