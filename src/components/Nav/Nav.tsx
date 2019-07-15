import React from 'react';
import { NavLink } from 'react-router-dom';

import HomeIcon from './HomeIcon';
import MusicIcon from './MusicIcon';
import './Nav.css';

interface NavProps {
  readonly mobileOpen: boolean;
}

const Nav: React.FunctionComponent<NavProps> = ({ mobileOpen }) => {
  return (
    <nav className={`App-nav ${mobileOpen ? 'mobile-open' : ''}`}>
      <NavLink className="App-navLink" exact={true} to="/">
        <HomeIcon />
        Home
      </NavLink>
      <NavLink className="App-navLink" to="/music">
        <MusicIcon />
        Music
      </NavLink>
    </nav>
  );
};

export default Nav;
