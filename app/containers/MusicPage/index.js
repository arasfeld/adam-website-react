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

import Album from 'components/Album';
import Artist from 'components/Artist';
import Card from 'components/Card';
import H2 from 'components/H2';
import LoadingIndicator from 'components/LoadingIndicator';
import Track from 'components/Track';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import AlbumList from './AlbumList';
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

    return (
      <article>
        <Helmet>
          <title>Music</title>
          <meta
            name="description"
            content="Music page of Adam Rasfeld's website"
          />
        </Helmet>

        {loading && <LoadingIndicator />}

        {error && <H2>Something went wrong!</H2>}

        {!(loading || error) && (
          <div>
            {tracks && (
              <div>
                <H2>
                  <FormattedMessage {...messages.tracks} />
                </H2>
                <Card>
                  {tracks.map(track => (
                    <Track key={track.key} {...track} />
                  ))}
                </Card>
              </div>
            )}

            {albums && (
              <div>
                <H2>
                  <FormattedMessage {...messages.albums} />
                </H2>
                <AlbumList>
                  {albums.map(album => (
                    <Album key={album.key} {...album} />
                  ))}
                </AlbumList>
              </div>
            )}

            {artists && (
              <div>
                <H2>
                  <FormattedMessage {...messages.artists} />
                </H2>
                <AlbumList>
                  {artists.map(artist => (
                    <Artist key={artist.key} {...artist} />
                  ))}
                </AlbumList>
              </div>
            )}
          </div>
        )}
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
