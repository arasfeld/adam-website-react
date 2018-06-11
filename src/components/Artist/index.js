import React from 'react';
import PropTypes from 'prop-types';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

function Artist({ name, image }) {
  return (
    <GridListTile>
      <img src={image} alt={name} />
      <GridListTileBar
        title={name}
      />
    </GridListTile>
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Artist;
