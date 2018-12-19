import React from 'react';

import MenuButton from './MenuButton';
import Nav from '../Nav';
import './Header.css';

interface HeaderState {
  readonly mobileOpen: boolean;
}

class Header extends React.Component<{}, HeaderState> {
  readonly state: HeaderState = {
    mobileOpen: false,
  };

  toggleMobileNav = () => {
    this.setState(prevState => ({ mobileOpen: !prevState.mobileOpen }));
  };

  closeNav = () => {
    this.setState({ mobileOpen: false });
  };

  render() {
    const { mobileOpen } = this.state;
    return (
      <header className="App-header">
        <div className="App-logo">Adam Rasfeld</div>
        <MenuButton onClick={this.toggleMobileNav} />
        <Nav mobileOpen={mobileOpen} />
      </header>
    );
  }
}

export default Header;
