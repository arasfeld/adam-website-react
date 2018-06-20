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
import Typography from '@material-ui/core/Typography';

import AlbumList from 'components/AlbumList';
import ArtistList from 'components/ArtistList';
import TrackList from 'components/TrackList';
import LoadingIndicator from 'components/LoadingIndicator';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { loadMusic } from './actions';
import { makeSelectAlbums, makeSelectArtists, makeSelectRecentTracks, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class MusicPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { loading, error, albums, artists, recentTracks } = this.props;
    console.log(this.props);

    let content;
    if (loading) {
      content = <LoadingIndicator />;
    } else if (error !== false) {
      content = <Typography>Something went wrong!</Typography>;
    } else {
      content = (
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <TrackList tracks={recentTracks} />
          </Grid>
          <Grid item xs={12}>
            <AlbumList albums={albums} />
          </Grid>
          <Grid item xs={12}>
            <ArtistList artists={artists} />
          </Grid>
        </Grid>
      );
    }

    return (
      <article>
        <Helmet>
          <title>Music</title>
          <meta name="description" content="Music page of Adam Rasfeld's website" />
        </Helmet>

        {content}
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
    onLoad: () => dispatch(loadMusic()),
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
