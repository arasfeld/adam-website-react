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

import Card from 'components/Card';
import H3 from 'components/H3';
import LoadingIndicator from 'components/LoadingIndicator';
import OwnedGame from 'components/OwnedGame';
import RecentGame from 'components/RecentGame';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ImageList from './ImageList';
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

    return (
      <article>
        <Helmet>
          <title>Games</title>
          <meta
            name="description"
            content="Games page of Adam Rasfeld's website"
          />
        </Helmet>

        {loading && <LoadingIndicator />}

        {error && <H3>Something went wrong!</H3>}

        {!(loading || error) && (
          <div>
            {recentlyPlayedGames && (
              <div>
                <H3>
                  <FormattedMessage {...messages.recentlyPlayed} />
                </H3>
                <H3>
                  <FormattedMessage
                    {...messages.activity}
                    values={{
                      hours: this.minutesToHours(
                        this.totalMinutes(recentlyPlayedGames),
                      ),
                    }}
                  />
                </H3>
                <Card>
                  {recentlyPlayedGames.map(game => (
                    <RecentGame {...game} />
                  ))}
                </Card>
              </div>
            )}

            {ownedGames && (
              <div>
                <H3>
                  <FormattedMessage {...messages.owned} />
                </H3>
                <ImageList>
                  {ownedGames.map(ownedGame => (
                    <div key={ownedGame.key}>
                      <OwnedGame {...ownedGame} />
                    </div>
                  ))}
                </ImageList>
              </div>
            )}
          </div>
        )}
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
