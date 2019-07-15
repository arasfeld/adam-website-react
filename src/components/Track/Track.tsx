import React from 'react';
import './Track.css';

interface TrackProps {
  readonly album: string;
  readonly artist: string;
  readonly date: Date;
  readonly image: string;
  readonly name: string;
}

const Track: React.FC<TrackProps> = ({ album, artist, image, name }) => {
  return (
    <div className="App-track">
      <img className="App-trackImage" src={image} alt={album} />
      <div className="App-trackText">
        {`${artist} - ${name}`}
      </div>
    </div>
  );
};

export default Track;
