import React from 'react';
import PropTypes from 'prop-types';

import AlbumLabel from './AlbumLabel';
import ArtistLabel from './ArtistLabel';
import Image from './Image';
import Overlay from './Overlay';
import Wrapper from './Wrapper';

function Album({ artist, image, name }) {
  return (
    <Wrapper>
      <Image src={image} alt={name} />
      <Overlay>
        <AlbumLabel>{name}</AlbumLabel>
        <ArtistLabel>{artist}</ArtistLabel>
      </Overlay>
    </Wrapper>
  );
}

Album.propTypes = {
  artist: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Album;
