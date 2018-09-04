import styled from 'styled-components';
import theme from 'utils/theme';

export default styled.a`
  box-sizing: border-box;
  color: ${theme.palette.secondaryText};
  font-size: 14px;
  padding: 12px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${theme.palette.primaryColor};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;
