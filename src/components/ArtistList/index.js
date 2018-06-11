import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';

import Artist from 'components/Artist';
import LoadingIndicator from 'components/LoadingIndicator';
import messages from './messages';

function ArtistList({ loading, error, artists }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <Typography>Something went wrong!</Typography>;
  }

  if (artists !== false) {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
        <GridList>
          {artists.map((artist) => (
            <Artist
              key={artist.key}
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
  loading: PropTypes.bool,
  error: PropTypes.any,
  artists: PropTypes.any,
};

export default ArtistList;
