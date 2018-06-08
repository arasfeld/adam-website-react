import React from 'react';
import PropTypes from 'prop-types';

// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Album from 'components/Album';
import LoadingIndicator from 'components/LoadingIndicator';

function AlbumList({ loading, error, albums }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <Typography>Something went wrong!</Typography>;
  }

  if (albums !== false) {
    return albums.map((album) => (
      <Album key={`album-${album['@attr'].rank}`} rank={album['@attr'].rank} title={album.name} artist={album.artist.name} image={album.image[2]['#text']} />
    ));
  }

  return null;
}

AlbumList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  albums: PropTypes.any,
};

export default AlbumList;
