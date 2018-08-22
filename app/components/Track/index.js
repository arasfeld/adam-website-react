import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import Text from './Text';
import Timestamp from './Timestamp';
import Wrapper from './Wrapper';

function Track({ album, artist, date, image, name }) {
  return (
    <Wrapper>
      <Image alt={album} src={image} />
      <Text>{`${artist} - ${name}`}</Text>
      <Timestamp date={date} />
    </Wrapper>
  );
}

Track.propTypes = {
  album: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  date: PropTypes.object,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Track;
