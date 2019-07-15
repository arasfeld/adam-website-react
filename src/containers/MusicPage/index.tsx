import React, { useCallback, useEffect } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';

import Album from '../../components/Album';
import Artist from '../../components/Artist';
import Card from '../../components/Card';
import Track from '../../components/Track';
import { RootState } from '../../reducers';
import { loadMusic } from './actions';
import { MusicPageProps } from './types';
import './index.css';

const MusicPage: React.FC<MusicPageProps> = () => {
  const dispatch = useDispatch();
  const mapState = useCallback((state: RootState) => state.music, []);
  const { albums, artists, tracks } = useMappedState(mapState);

  useEffect(() => {
    dispatch(loadMusic());
  }, [dispatch]);

  return (
    <div className="App-music">
      {tracks && (
        <Card>
          {tracks.map(track => (
            <Track key={track.key} {...track} />
          ))}
        </Card>
      )}
      {albums && (
        <div className="App-albumList">
          {albums.map(album => (
            <Album key={album.key} {...album} />
          ))}
        </div>
      )}
      {artists && (
        <div className="App-artistList">
          {artists.map(artist => (
            <Artist key={artist.key} {...artist} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MusicPage;
