import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import Track from 'components/Track';
import LoadingIndicator from 'components/LoadingIndicator';
import messages from './messages';

function TrackList({ loading, error, tracks }) {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error !== false) {
    return <Typography>Something went wrong!</Typography>;
  }

  if (tracks !== false) {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
        <Card>
          <List dense>
            {tracks.map((track) => (
              <Track
                key={track.key}
                {...track}
              />
            ))}
          </List>
        </Card>
      </div>
    );
  }

  return null;
}

TrackList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  tracks: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

export default TrackList;