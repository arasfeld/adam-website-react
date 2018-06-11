/*
 * MusicPage
 *
 * Display my most listened to music from Spotify
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Grid from '@material-ui/core/Grid';

import AlbumList from 'components/AlbumList';
import ArtistList from 'components/ArtistList';
import TrackList from 'components/TrackList';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { loadAlbums, loadArtists, loadRecentTracks } from './actions';
import { makeSelectAlbums, makeSelectArtists, makeSelectRecentTracks, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class MusicPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { loading, error, albums, artists, recentTracks } = this.props;
    const albumListProps = { loading, error, albums };
    const artistListProps = { loading, error, artists };
    const trackListProps = { loading, error, recentTracks };

    return (
      <article>
        <Helmet>
          <title>Music</title>
          <meta name="description" content="Music page of Adam Rasfeld's website" />
        </Helmet>

        <Grid container spacing={16}>
          <Grid item xs={12}>
            <TrackList tracks={trackListProps.recentTracks} {...trackListProps} />
          </Grid>
          <Grid item xs={12}>
            <AlbumList {...albumListProps} />
          </Grid>
          <Grid item xs={12}>
            <ArtistList {...artistListProps} />
          </Grid>
        </Grid>
      </article>
    );
  }
}

MusicPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  albums: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  artists: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  recentTracks: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onLoad: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(loadAlbums());
      dispatch(loadArtists());
      dispatch(loadRecentTracks());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  albums: makeSelectAlbums(),
  artists: makeSelectArtists(),
  recentTracks: makeSelectRecentTracks(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'music', reducer });
const withSaga = injectSaga({ key: 'music', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MusicPage);
