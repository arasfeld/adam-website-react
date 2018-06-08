import React from 'react';
import PropTypes from 'prop-types';

// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Artist from 'components/Artist';
import LoadingIndicator from 'components/LoadingIndicator';

function ArtistList({ loading, error, artists }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <Typography>Something went wrong!</Typography>;
  }

  if (artists !== false) {
    return artists.map((artist) => (
      <Artist key={`artist-${artist.name}`} rank={artist['@attr'].rank} name={artist.name} image={artist.image[2]['#text']} />
    ));
  }

  return null;
}

ArtistList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  artists: PropTypes.any,
};

export default ArtistList;
