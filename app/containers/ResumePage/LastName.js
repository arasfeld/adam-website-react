import styled from 'styled-components';
import { secondaryText } from 'static/colors';
import { fontFamily, fontWeightLight } from 'static/typography';

const LastName = styled.span`
  color: ${secondaryText};
  font-family: ${fontFamily};
  font-size: 34px;
  font-weight: ${fontWeightLight};
`;

export default LastName;
