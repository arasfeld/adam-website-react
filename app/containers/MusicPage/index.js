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

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';

import Album from 'components/Album';
import Artist from 'components/Artist';
import Track from 'components/Track';
import LoadingIndicator from 'components/LoadingIndicator';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { loadMusic } from './actions';
import {
  makeSelectAlbums,
  makeSelectArtists,
  makeSelectTracks,
  makeSelectLoading,
  makeSelectError,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class MusicPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { loading, error, albums, artists, tracks } = this.props;

    let content;
    if (loading) {
      content = <LoadingIndicator />;
    } else if (error !== false) {
      content = <Typography>Something went wrong!</Typography>;
    } else {
      content = (
        <Grid container spacing={16}>
          {tracks && (
            <Grid item xs={12}>
              <Typography variant="headline" gutterBottom>
                <FormattedMessage {...messages.tracks} />
              </Typography>
              <Card>
                <List dense>
                  {tracks.map(track => (
                    <Track key={track.key} {...track} />
                  ))}
                </List>
              </Card>
            </Grid>
          )}

          {albums && (
            <Grid item xs={12}>
              <Typography variant="headline" gutterBottom>
                <FormattedMessage {...messages.albums} />
              </Typography>
              <Grid container justify="space-around" spacing={8} wrap="wrap">
                {albums.map(album => (
                  <Grid key={album.key} item>
                    <Album {...album} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          )}

          {artists && (
            <Grid item xs={12}>
              <Typography variant="headline" gutterBottom>
                <FormattedMessage {...messages.artists} />
              </Typography>
              <Grid container justify="space-around" spacing={8} wrap="wrap">
                {artists.map(artist => (
                  <Grid key={artist.key} item>
                    <Artist {...artist} />
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
          <title>Music</title>
          <meta
            name="description"
            content="Music page of Adam Rasfeld's website"
          />
        </Helmet>

        {content}
      </article>
    );
  }
}

MusicPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  albums: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  artists: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  tracks: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
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
  tracks: makeSelectTracks(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'music', reducer });
const withSaga = injectSaga({ key: 'music', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(MusicPage);
