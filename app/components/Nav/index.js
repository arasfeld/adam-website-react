import React from 'react';
import { FormattedMessage } from 'react-intl';

import ContactIcon from './ContactIcon';
import GameIcon from './GameIcon';
import HomeIcon from './HomeIcon';
import MenuButton from './MenuButton';
import MusicIcon from './MusicIcon';
import NavBar from './NavBar';
import NavBarIcon from './NavBarIcon';
import NavBarLink from './NavBarLink';
import OctocatIcon from './OctocatIcon';
import ResumeIcon from './ResumeIcon';
import Wrapper from './Wrapper';
import messages from './messages';

class Nav extends React.Component {
  state = {
    mobileOpen: false,
  };

  toggleMobileNav = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { mobileOpen } = this.state;

    return (
      <Wrapper>
        <MenuButton onClick={this.toggleMobileNav} />
        <NavBar className={mobileOpen ? 'mobile-open' : null}>
          <NavBarLink exact to="/">
            <HomeIcon />
            <FormattedMessage {...messages.home} />
          </NavBarLink>
          <NavBarLink to="/games">
            <GameIcon />
            <FormattedMessage {...messages.games} />
          </NavBarLink>
          <NavBarLink to="/music">
            <MusicIcon />
            <FormattedMessage {...messages.music} />
          </NavBarLink>
          <NavBarLink to="/resume">
            <ResumeIcon />
            <FormattedMessage {...messages.resume} />
          </NavBarLink>
          <NavBarLink to="/contact">
            <ContactIcon />
            <FormattedMessage {...messages.contact} />
          </NavBarLink>
          <NavBarIcon href="https://github.com/arasfeld">
            <OctocatIcon />
          </NavBarIcon>
        </NavBar>
      </Wrapper>
    );
  }
}

export default Nav;
