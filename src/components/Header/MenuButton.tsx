import React from 'react';
import SvgIcon from '../SvgIcon';
import './MenuButton.css';

interface MenuButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick }) => {
  return (
    <button className="App-menuButton" onClick={onClick}>
      <SvgIcon viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </SvgIcon>
    </button>
  );
};

export default MenuButton;
