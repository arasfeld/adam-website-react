import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import OwnedGame from 'components/OwnedGame';
import messages from './messages';

function OwnedGameList({ games }) {
  if (games) {
    return (
      <div>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
        <Grid container justify="space-around" spacing={8} wrap="wrap">
          {games.map(game => (
            <Grid key={game.key} item>
              <OwnedGame name={game.name} image={game.logoImage} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }

  return null;
}

OwnedGameList.propTypes = {
  games: PropTypes.any,
};

export default OwnedGameList;
