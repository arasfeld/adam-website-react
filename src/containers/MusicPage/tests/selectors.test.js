import { fromJS } from 'immutable';

import {
  selectMusic,
  makeSelectLoading,
  makeSelectError,
  makeSelectAlbums,
  makeSelectArtists,
} from '../selectors';

describe('selectMusic', () => {
  it('should select the music state', () => {
    const musicState = fromJS({});
    const mockedState = fromJS({
      music: musicState,
    });
    expect(selectMusic(mockedState)).toEqual(musicState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      music: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      music: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectAlbums', () => {
  const albumsSelector = makeSelectAlbums();
  it('should select the albums', () => {
    const albums = fromJS({});
    const mockedState = fromJS({
      music: {
        albums,
      },
    });
    expect(albumsSelector(mockedState)).toEqual(albums);
  });
});

describe('makeSelectArtists', () => {
  const artistsSelector = makeSelectArtists();
  it('should select the artists', () => {
    const artists = fromJS({});
    const mockedState = fromJS({
      music: {
        artists,
      },
    });
    expect(artistsSelector(mockedState)).toEqual(artists);
  });
});
