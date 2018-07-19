import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Album from 'components/Album';
import messages from './messages';

function AlbumList({ albums }) {
  if (albums) {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
        <Grid container justify="space-around" spacing={8} wrap="wrap">
          {albums.map(album => (
            <Grid key={album.key} item>
              <Album {...album} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  return null;
}

AlbumList.propTypes = {
  albums: PropTypes.any,
};

export default AlbumList;
