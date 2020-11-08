import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@chakra-ui/core';
import PM25Card from './PM25Card';

function Content({ data }) {
  return (
    <Flex maxWidth='6xl' margin='1rem auto' wrap='wrap' justify='space-between'>
      {data.map((o, index) => {
        return (
          <PM25Card
            key={index}
            Site={o.Site}
            county={o.county}
            PM25={parseInt(o.PM25)}
            DataCreationDate={o.DataCreationDate}
            ItemUnit={o.ItemUnit}
          />
        );
      })}
    </Flex>
  );
}

Content.propTypes = {
  data: PropTypes.array,
};

export default Content;
