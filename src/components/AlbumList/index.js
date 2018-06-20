import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';

import Album from 'components/Album';
import messages from './messages';

const styles = () => ({
  album: {
    width: 175,
  },
});

function AlbumList({ classes, albums }) {
  if (albums) {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
        <GridList>
          {albums.map((album) => (
            <Album
              key={album.key}
              className={classes.album}
              {...album}
            />
          ))}
        </GridList>
      </div>
    );
  }

  return null;
}

AlbumList.propTypes = {
  classes: PropTypes.object.isRequired,
  albums: PropTypes.any,
};

export default withStyles(styles)(AlbumList);
