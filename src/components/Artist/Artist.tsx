import React from 'react';
import './Artist.css';

interface ArtistProps {
  readonly name: string;
  readonly image: string;
}

const Artist: React.FunctionComponent<ArtistProps> = ({ name, image }) => {
  return (
    <div className="App-artist">
      <img className="App-artistImage" src={image} alt={name} />
      <div className="App-artistOverlay">
        <div className="App-artistLabel">{name}</div>
      </div>
    </div>
  );
};

export default Artist;
