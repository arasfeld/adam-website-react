import React from 'react';
import PropTypes from 'prop-types';

import AlbumArtist from './AlbumArtist';
import AlbumImage from './AlbumImage';
import AlbumOverlay from './AlbumOverlay';
import AlbumTitle from './AlbumTitle';
import AlbumWrapper from './AlbumWrapper';

function Album({ artist, image, name }) {
  return (
    <AlbumWrapper>
      <AlbumImage src={image} alt={name} />
      <AlbumOverlay>
        <AlbumTitle>{name}</AlbumTitle>
        <AlbumArtist>{artist}</AlbumArtist>
      </AlbumOverlay>
    </AlbumWrapper>
  );
}

Album.propTypes = {
  artist: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Album;
