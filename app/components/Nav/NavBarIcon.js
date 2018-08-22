import styled from 'styled-components';
import { primaryColor, secondaryText } from 'static/colors';

export default styled.a`
  box-sizing: border-box;
  color: ${secondaryText};
  font-size: 14px;
  padding: 12px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s ease-in;

  &:hover {
    color: ${primaryColor};
  }
`;
