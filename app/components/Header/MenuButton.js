import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Svg from 'components/Svg';
import { md } from 'static/breakpoints';

const MobileButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  color: inherit;
  cursor: pointer;
  display: none;
  float: right;
  justify-content: center;
  margin: 0;
  outline: none;
  padding: 0;
  user-select: none;

  @media (max-width: ${md}) {
    display: block;
  }
`;

function MenuButton({ onClick }) {
  return (
    <MobileButton onClick={onClick}>
      <Svg viewBox="0 0 36 36">
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </Svg>
    </MobileButton>
  );
}

MenuButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuButton;
