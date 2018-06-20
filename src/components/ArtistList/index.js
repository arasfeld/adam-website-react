import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';

import Artist from 'components/Artist';
import messages from './messages';

const styles = () => ({
  artist: {
    width: 175,
  },
});

function ArtistList({ classes, artists }) {
  if (artists) {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
        <GridList>
          {artists.map((artist) => (
            <Artist
              key={artist.key}
              className={classes.artist}
              {...artist}
            />
          ))}
        </GridList>
      </div>
    );
  }

  return null;
}

ArtistList.propTypes = {
  classes: PropTypes.object.isRequired,
  artists: PropTypes.any,
};

export default withStyles(styles)(ArtistList);
