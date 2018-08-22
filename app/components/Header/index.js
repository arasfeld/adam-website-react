import React from 'react';
import Nav from 'components/Nav';
import Logo from './Logo';
import Wrapper from './Wrapper';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Logo>Adam Rasfeld</Logo>
        <Nav />
      </Wrapper>
    );
  }
}

export default Header;
