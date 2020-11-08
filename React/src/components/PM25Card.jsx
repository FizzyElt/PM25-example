import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar';
import { Flex, Text, Box } from '@chakra-ui/core';
import { FaFrown, FaGrin, FaMeh, FaDizzy } from 'react-icons/fa';

function getPercent(value, min, max) {
  if (min >= max) {
    throw new Error('min is larger than max');
  }
  if (value < min) {
    throw new Error('value is out of range');
  }
  if (value >= max) {
    return 1;
  }
  return (value - min) / (max - min);
}

function getBarColor(num) {
  const range = [
    {
      value: 350,
      color: 'black',
    },
    {
      value: 250,
      color: 'orange.900',
    },
    {
      value: 150,
      color: 'purple.700',
    },
    {
      value: 54,
      color: 'red.500',
    },
    {
      value: 35,
      color: 'orange.400',
    },
    {
      value: 15,
      color: 'yellow.300',
    },
  ];
  for (const o of range) {
    if (o.value <= num) {
      return o.color;
    }
  }
  return 'green.500';
}

function getIcon(num) {
  const range = [
    { value: 250, Icon: FaDizzy },
    { value: 54, Icon: FaFrown },
    { value: 15, Icon: FaMeh },
  ];
  for (const o of range) {
    if (num >= o.value) {
      return o.Icon;
    }
  }
  return FaGrin;
}

function PM25Card({
  Site = '楠梓',
  county = '高雄市',
  PM25 = 19,
  DataCreationDate = '2020-10-18 19:00',
  ItemUnit = 'μg/m3',
}) {
  return (
    <Flex
      direction='column'
      borderRadius='8px'
      padding='0.5rem 1.5rem'
      width='2xs'
      margin='10px 0'
      align='center'
      bg='green.600'
    >
      <Flex justify='space-between' width='100%' align='center'>
        <Flex direction='column'>
          <Text color='white'>
            {county} {Site}
          </Text>
          <Text color='white'>
            {PM25} {ItemUnit}
          </Text>
        </Flex>
        <Box as={getIcon(PM25)} size='40px' color='gray.200' />
      </Flex>
      <Bar
        height='14'
        percent={getPercent(PM25, 0, 400)}
        color={getBarColor(PM25)}
      />
      <Text fontSize='sm' color='white'>
        資料更新：{DataCreationDate}
      </Text>
    </Flex>
  );
}
PM25Card.propTypes = {
  Site: PropTypes.string,
  county: PropTypes.string,
  PM25: PropTypes.number,
  DataCreationDate: PropTypes.string,
  ItemUnit: PropTypes.string,
};

export default PM25Card;
