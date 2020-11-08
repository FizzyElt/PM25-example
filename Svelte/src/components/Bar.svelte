<script>
  export let pm25 = 0;
  export let height = 10;
  let b = 0;
  function getBarColor(num) {
    const range = [
      {
        value: 350,
        color: '#000000',
      },
      {
        value: 250,
        color: 'rgb(117, 72, 34)',
      },
      {
        value: 150,
        color: 'rgb(166, 0, 207)',
      },
      {
        value: 54,
        color: 'red',
      },
      {
        value: 35,
        color: 'rgb(255, 126, 20)',
      },
      {
        value: 15,
        color: 'rgb(255, 200, 20)',
      },
    ];
    for (const o of range) {
      if (o.value <= num) {
        return o.color;
      }
    }
    return 'rgb(107, 236, 32)';
  }
  setTimeout(() => {
    b = pm25;
  }, 200);
</script>

<style>
  .bar {
    width: 100%;
    background-color: #505050;
    border-radius: 8px;
    margin: 0 5px;
  }
  .line {
    height: 100%;
    border-radius: 8px;
    transition: 1s;
  }
</style>

<div class="bar" style="height:{height}px;">
  <div
    class="line"
    style="width: {(b / 400) * 100}%; background-color: {getBarColor(pm25)};" />
</div>
