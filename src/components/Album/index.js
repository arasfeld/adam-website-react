import React from 'react';
import PropTypes from 'prop-types';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

function Album({ artist, image, name }) {
  return (
    <GridListTile>
      <img src={image} alt={name} />
      <GridListTileBar
        title={name}
        subtitle={artist}
      />
    </GridListTile>
  );
}

Album.propTypes = {
  artist: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Album;
