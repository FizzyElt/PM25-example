import React from 'react';
import PropTypes from 'prop-types';
import { Select } from '@chakra-ui/core';

function Selector({ options, onSelect }) {
  const handleSelect = (e) => {
    onSelect(e.currentTarget.value);
  };

  return (
    <Select width={'3xs'} onChange={handleSelect} placeholder={'選擇縣市'}>
      {options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </Select>
  );
}

Selector.propTypes = {
  options: PropTypes.array,
  onSelect: PropTypes.func,
};

export default Selector;
