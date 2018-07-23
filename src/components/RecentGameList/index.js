import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import RecentGame from 'components/RecentGame';
import messages from './messages';

function RecentGameList({ games }) {
  if (games) {
    const totalMinutes = games.reduce(
      (total, game) => total + game.recentPlaytime,
      0,
    );

    return (
      <div>
        <Grid container justify="space-between" alignItems="flex-end">
          <Grid item>
            <Typography variant="headline" gutterBottom>
              <FormattedMessage {...messages.header} />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subheading" gutterBottom>
              <FormattedMessage
                {...messages.activity}
                values={{
                  hours: Math.round((totalMinutes / 60) * 10) / 10,
                }}
              />
            </Typography>
          </Grid>
        </Grid>

        <Card>
          <List dense>
            {games.map(game => (
              <RecentGame
                key={game.key}
                name={game.name}
                image={game.iconImage}
                playtime={game.recentPlaytime}
              />
            ))}
          </List>
        </Card>
      </div>
    );
  }

  return null;
}

RecentGameList.propTypes = {
  games: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

export default RecentGameList;
