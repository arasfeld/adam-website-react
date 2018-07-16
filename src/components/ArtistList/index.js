import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Artist from 'components/Artist';
import messages from './messages';

function ArtistList({ artists }) {
  if (artists) {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
        <Grid container justify="space-around" spacing={8} wrap>
          {artists.map(artist => (
            <Grid key={artist.key} item>
              <Artist {...artist} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  return null;
}

ArtistList.propTypes = {
  artists: PropTypes.any,
};

export default ArtistList;
