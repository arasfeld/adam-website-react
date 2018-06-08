import { put, takeLatest } from 'redux-saga/effects';

import { LOAD_ALBUMS, LOAD_ARTISTS } from '../constants';
import { albumsLoaded, albumLoadingError, artistsLoaded, artistLoadingError } from '../actions';

import lastFmData, { getTopAlbums, getTopArtists } from '../saga';

describe('getTopAlbums Saga', () => {
  let getTopAlbumsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getTopAlbumsGenerator = getTopAlbums();

    const callDescriptor = getTopAlbumsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the albumsLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First album',
    }, {
      name: 'Second album',
    }];
    const putDescriptor = getTopAlbumsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(albumsLoaded(response)));
  });

  it('should dispatch the albumLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getTopAlbumsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(albumLoadingError(response)));
  });
});

describe('getTopArtists Saga', () => {
  let getTopArtistsGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getTopArtistsGenerator = getTopArtists();

    const callDescriptor = getTopArtistsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the artistsLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First artist',
    }, {
      name: 'Second artist',
    }];
    const putDescriptor = getTopArtistsGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(artistsLoaded(response)));
  });

  it('should dispatch the artistLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getTopArtistsGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(artistLoadingError(response)));
  });
});

describe('lastFmData Saga', () => {
  const lastFmDataSaga = lastFmData();

  it('should start task to watch for LOAD_ALBUMS and LOAD_ARTISTS actions', () => {
    const takeLatestLoadAlbumsDescriptor = lastFmDataSaga.next().value;
    expect(takeLatestLoadAlbumsDescriptor).toEqual(takeLatest(LOAD_ALBUMS, getTopAlbums));

    const takeLatestLoadArtistsDescriptor = lastFmDataSaga.next().value;
    expect(takeLatestLoadArtistsDescriptor).toEqual(takeLatest(LOAD_ARTISTS, getTopAlbums));
  });
});
