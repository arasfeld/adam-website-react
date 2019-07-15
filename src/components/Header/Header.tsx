import React, { useState } from 'react';
import MenuButton from './MenuButton';
import Nav from '../Nav';
import './Header.css';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <header className="App-header">
      <div className="App-logo">Adam Rasfeld</div>
      <MenuButton onClick={toggleMobileNav} />
      <Nav mobileOpen={mobileOpen} />
    </header>
  );
};

export default Header;
