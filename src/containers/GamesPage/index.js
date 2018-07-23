/*
 * GamesPage
 *
 * Display my recently played and owned games from Steam
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LoadingIndicator from 'components/LoadingIndicator';
import OwnedGameList from 'components/OwnedGameList';
import RecentGameList from 'components/RecentGameList';
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

export class GamesPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoad();
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
          <Grid item xs={12}>
            <RecentGameList games={recentlyPlayedGames} />
          </Grid>
          <Grid item xs={12}>
            <OwnedGameList games={ownedGames} />
          </Grid>
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
