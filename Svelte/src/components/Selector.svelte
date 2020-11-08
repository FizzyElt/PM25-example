<script>
  export let options = [];
  export let handleSelect = () => {};
</script>

<style>
  .container {
    display: flex;
    margin: 20px auto;
    max-width: 1200px;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  select {
    width: 200px;
  }
</style>

<div class="container">
  <select placeholder="選擇縣市" name="" id="" on:change={handleSelect}>
    <option value={''} selected>選擇縣市</option>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>
