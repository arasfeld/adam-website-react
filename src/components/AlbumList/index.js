import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import GridList from '@material-ui/core/GridList';
import Typography from '@material-ui/core/Typography';

import Album from 'components/Album';
import LoadingIndicator from 'components/LoadingIndicator';
import messages from './messages';

function AlbumList({ loading, error, albums }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <Typography>Something went wrong!</Typography>;
  }

  if (albums !== false) {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
        <GridList>
          {albums.map((album) => (
            <Album
              key={album.key}
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
  loading: PropTypes.bool,
  error: PropTypes.any,
  albums: PropTypes.any,
};

export default AlbumList;
