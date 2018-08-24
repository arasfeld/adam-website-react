import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'utils/theme';

export default styled(NavLink)`
  align-items: center;
  color: ${theme.palette.secondaryText};
  display: flex;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 15px;
  letter-spacing: 2px;
  padding: 12px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-in;

  svg {
    padding-right: 5px;
  }

  &.active,
  &:hover {
    color: ${theme.palette.primaryColor};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    border-bottom: 1px solid ${theme.palette.backgroundColor3};
    display: block;
    float: none;
  }
`;
