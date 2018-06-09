/*
 * MusicPage
 *
 * Display my most listened to music from Spotify
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AlbumList from 'components/AlbumList';
import ArtistList from 'components/ArtistList';
import Track from 'components/Track';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import messages from './messages';
import { loadAlbums, loadArtists, loadLastTrack } from './actions';
import { makeSelectAlbums, makeSelectArtists, makeSelectLastTrack, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class MusicPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { loading, error, albums, artists, lastTrack } = this.props;
    const albumListProps = { loading, error, albums };
    const artistListProps = { loading, error, artists };

    return (
      <article>
        <Helmet>
          <title>Music</title>
          <meta name="description" content="Music page of Adam Rasfeld's website" />
        </Helmet>
        <div>
          <Typography variant="display2" gutterBottom>
            <FormattedMessage {...messages.header} />
          </Typography>
        </div>
        <Grid container>
          <Grid item lg={3}></Grid>
          <Grid item lg={6}>
            {lastTrack && <Track album={lastTrack.album['#text']} artist={lastTrack.artist['#text']} image={lastTrack.image[2]['#text']} name={lastTrack.name} />}
          </Grid>
          <Grid item lg={3}></Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12} lg={6}>
            <AlbumList {...albumListProps} />
          </Grid>
          <Grid item xs={12} lg={6}>
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
  lastTrack: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onLoad: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => {
      dispatch(loadAlbums());
      dispatch(loadArtists());
      dispatch(loadLastTrack());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  albums: makeSelectAlbums(),
  artists: makeSelectArtists(),
  lastTrack: makeSelectLastTrack(),
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
