import React from 'react';
import './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly children: React.ReactNode[] | React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, ...other }) => {
  return (
    <div className="App-card" {...other}>
      {children}
    </div>
  );
};

export default Card;
