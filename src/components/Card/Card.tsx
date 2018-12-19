import React from 'react';
import './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly children: React.ReactNode[] | React.ReactNode;
}

const Card: React.FunctionComponent<CardProps> = ({ children, ...other }) => {
  return (
    <div className="App-card" {...other}>
      {children}
    </div>
  );
};

export default Card;
