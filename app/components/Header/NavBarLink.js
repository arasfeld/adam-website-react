import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { primaryColor, secondaryText } from 'static/colors';

export default styled(NavLink)`
  color: ${secondaryText};
  display: flex;
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

  &.active {
    color: ${primaryColor};
  }

  &:hover {
    color: ${primaryColor};
  }
`;
