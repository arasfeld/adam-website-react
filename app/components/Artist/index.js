import React from 'react';
import PropTypes from 'prop-types';

import ArtistImage from './ArtistImage';
import ArtistOverlay from './ArtistOverlay';
import ArtistTitle from './ArtistTitle';
import ArtistWrapper from './ArtistWrapper';

function Artist({ name, image }) {
  return (
    <ArtistWrapper>
      <ArtistImage src={image} alt={name} />
      <ArtistOverlay>
        <ArtistTitle>{name}</ArtistTitle>
      </ArtistOverlay>
    </ArtistWrapper>
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Artist;
