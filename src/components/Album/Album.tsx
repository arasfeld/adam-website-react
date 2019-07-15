import React from 'react';
import './Album.css';

interface AlbumProps {
  readonly artist: string;
  readonly name: string;
  readonly image: string;
}

const Album: React.FunctionComponent<AlbumProps> = ({ artist, name, image }) => {
  return (
    <div className="App-album">
      <img className="App-albumImage" src={image} alt={name} />
      <div className="App-albumOverlay">
        <div className="App-albumLabel">{name}</div>
        <div className="App-albumLabel">{artist}</div>
      </div>
    </div>
  );
};

export default Album;
