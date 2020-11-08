<script>
  import Icon from './Icon.svelte';
  import Bar from './Bar.svelte';
  import { fade } from 'svelte/transition';
  export let item;
</script>

<style>
  h4,
  h3,
  p {
    padding: 0;
    margin: 0;
    color: white;
  }
  .card {
    box-sizing: border-box;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: 'center';
    border-radius: 9px;
    background-color: teal;
    margin: 10px 0;
    padding: 12px;
  }
  p {
    text-align: center;
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    margin-bottom: 10px;
  }
  .icon {
    width: 40px;
    height: 40px;
    color: white;
  }
</style>

<li class="card" in:fade>
  <div class="content">
    <div class="info">
      <h3>{item.county}</h3>
      <h3>{item.Site}</h3>
      <h4>{item.PM25} {item.ItemUnit}</h4>
    </div>
    <div class="icon">
      <Icon pm25={item.PM25} />
    </div>
  </div>
  <Bar pm25={item.PM25} height={10} />
  <p>{item.DataCreationDate}</p>
</li>
