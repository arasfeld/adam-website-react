/*
 * GamesPage
 *
 * Display my recently played and owned games from Steam
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import LoadingIndicator from 'components/LoadingIndicator';
import OwnedGame from 'components/OwnedGame';
import RecentGame from 'components/RecentGame';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { loadGames } from './actions';
import {
  makeSelectOwnedGames,
  makeSelectRecentlyPlayedGames,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class GamesPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoad();
  }

  totalMinutes(games) {
    return games.reduce((total, game) => total + game.recentPlaytime, 0);
  }

  minutesToHours(minutes) {
    return Math.round((minutes / 60) * 10) / 10;
  }

  render() {
    const { loading, error, ownedGames, recentlyPlayedGames } = this.props;

    let content;
    if (loading) {
      content = <LoadingIndicator />;
    } else if (error !== false) {
      content = <Typography>Something went wrong!</Typography>;
    } else {
      content = (
        <Grid container spacing={16}>
          {recentlyPlayedGames && (
            <Grid item xs={12}>
              <Grid container justify="space-between" alignItems="flex-end">
                <Grid item>
                  <Typography variant="headline" gutterBottom>
                    <FormattedMessage {...messages.recentlyPlayed} />
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subheading" gutterBottom>
                    <FormattedMessage
                      {...messages.activity}
                      values={{
                        hours: this.minutesToHours(
                          this.totalMinutes(recentlyPlayedGames),
                        ),
                      }}
                    />
                  </Typography>
                </Grid>
              </Grid>
              <Card>
                <List dense>
                  {recentlyPlayedGames.map(game => (
                    <RecentGame {...game} />
                  ))}
                </List>
              </Card>
            </Grid>
          )}

          {ownedGames && (
            <Grid item xs={12}>
              <Typography variant="headline" gutterBottom>
                <FormattedMessage {...messages.owned} />
              </Typography>
              <Grid container justify="space-around" spacing={8} wrap="wrap">
                {ownedGames.map(game => (
                  <Grid key={game.key} item>
                    <OwnedGame {...game} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}
        </Grid>
      );
    }

    return (
      <article>
        <Helmet>
          <title>Games</title>
          <meta
            name="description"
            content="Games page of Adam Rasfeld's website"
          />
        </Helmet>

        {content}
      </article>
    );
  }
}

GamesPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  ownedGames: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  recentlyPlayedGames: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onLoad: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadGames()),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  ownedGames: makeSelectOwnedGames(),
  recentlyPlayedGames: makeSelectRecentlyPlayedGames(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'games', reducer });
const withSaga = injectSaga({ key: 'games', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(GamesPage);
