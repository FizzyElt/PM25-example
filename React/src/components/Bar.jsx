import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/core';

export default function Bar({
  percent = '0',
  height = '10',
  color = 'green.500',
}) {
  const [current, setCurrent] = useState('0');
  useEffect(() => {
    let timer = setTimeout(() => {
      setCurrent(percent);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [percent]);
  return (
    <Box
      width='100%'
      height={`${height}px`}
      borderRadius='8px'
      overflow='hidden'
      margin='5px 0'
      padding='3px 4px'
      bg={'gray.600'}
      overflowX='hidden'
    >
      <Box
        width={`${current * 100}%`}
        height='100%'
        borderRadius='8px'
        bg={color}
        transition={'1s'}
        transformOrigin='0'
      />
    </Box>
  );
}
