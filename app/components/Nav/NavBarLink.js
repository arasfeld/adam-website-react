import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { primaryColor, secondaryText } from 'static/colors';
import { md } from 'static/breakpoints';

export default styled(NavLink)`
  color: ${secondaryText};
  float: left;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 15px;
  letter-spacing: 2px;
  padding: 12px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-in;

  svg {
    height: 1.2em;
    width: 1.2em;
    padding-right: 5px;
  }

  &.active,
  &:hover {
    color: ${primaryColor};
  }

  @media (max-width: ${md}) {
    border-bottom: 1px solid #414141;
    display: block;
    float: none;
  }
`;
