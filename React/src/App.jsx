import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content';
import { GetData } from './fetch.js';
import Selector from './components/Selector';
import { Flex } from '@chakra-ui/core';

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

function dataFilter(data, county) {
  if (county === '') {
    return data;
  }

  return data.filter((obj) => obj.county == county);
}

function App() {
  const [data, setData] = useState([]);
  const [county, setCounty] = useState('');

  const handleSelectCounty = (text) => {
    setCounty(text);
  };
  useEffect(() => {
    GetData()
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const countyOptions = getCountyOptions(data, 'county');

  return (
    <div>
      <Header />
      <Flex justify='flex-end' maxWidth='6xl' margin='20px auto'>
        <Selector options={countyOptions} onSelect={handleSelectCounty} />
      </Flex>
      <Content data={dataFilter(data, county)} />
    </div>
  );
}

export default App;
