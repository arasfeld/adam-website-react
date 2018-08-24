import React from 'react';
import Nav from 'components/Nav';
import Logo from './Logo';
import MenuButton from './MenuButton';
import Wrapper from './Wrapper';

class Header extends React.Component {
  state = {
    mobileOpen: false,
  };

  toggleMobileNav = () => {
    this.setState(prevState => ({ mobileOpen: !prevState.mobileOpen }));
  };

  render() {
    const { mobileOpen } = this.state;
    return (
      <Wrapper>
        <Logo>Adam Rasfeld</Logo>
        <MenuButton onClick={this.toggleMobileNav} />
        <Nav mobileOpen={mobileOpen} />
      </Wrapper>
    );
  }
}

export default Header;
