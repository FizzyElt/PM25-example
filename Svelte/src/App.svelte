<script>
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Content from './components/Content.svelte';
  import Selector from './components/Selector.svelte';
  import { GetData } from './fetch';

  let data = [];
  let county = '';

  $: filterdata = getItems(data, county);
  $: options = getCountyOptions(data, 'county');

  onMount(() => {
    GetData()
      .then((res) => {
        data = res;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function getItems(data, county) {
    if (county === '') {
      return data;
    }
    return data.filter((item) => item.county === county);
  }

  function getCountyOptions(data, keyName) {
    let set = new Set();
    let options = [];
    data.forEach((obj) => {
      if (!set.has(obj[keyName])) {
        options.push(obj[keyName]);
        set.add(obj[keyName]);
      }
    });
    return options;
  }
  function handleSelectCounty(e) {
    county = e.target.value;
  }
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>

<main>
  <Header />
  <Selector {options} handleSelect={handleSelectCounty} />
  <Content items={filterdata} />
</main>
