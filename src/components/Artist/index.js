import React from 'react';
import PropTypes from 'prop-types';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

function Artist({ className, name, image }) {
  return (
    <GridListTile className={className}>
      <img src={image} alt={name} />
      <GridListTileBar
        title={name}
      />
    </GridListTile>
  );
}

Artist.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Artist;
