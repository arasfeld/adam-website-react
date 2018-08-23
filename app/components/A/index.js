/**
 * A link to a certain page, an anchor tag
 */

import styled from 'styled-components';
import theme from 'utils/theme';

const A = styled.a`
  color: ${theme.palette.primaryColor};
  text-decoration: none;

  &:hover {
    color: ${theme.palette.primaryColorDark};
  }
`;

export default A;
