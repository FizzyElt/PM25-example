import React from 'react';
import { Flex, Text } from '@chakra-ui/core';
export default function Header() {
  return (
    <Flex bg={'teal.900'} justify='space-between' p='20px'>
      <Text fontSize='2xl' color={'white'}>
        PM2.5!!!!
      </Text>
    </Flex>
  );
}
