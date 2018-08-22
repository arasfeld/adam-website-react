/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import { primaryColor, primaryColorDark } from 'static/colors';

const A = styled.a`
  color: ${primaryColor};
  text-decoration: none;

  &:hover {
    color: ${primaryColorDark};
  }
`;

export default A;
