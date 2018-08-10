import styled from 'styled-components';
import { secondaryText } from 'static/colors';
import { fontFamily, fontWeightRegular } from 'static/typography';

const FirstName = styled.span`
  color: ${secondaryText};
  font-family: ${fontFamily};
  font-size: 34px;
  font-weight: ${fontWeightRegular};
  margin-right: 5px;
`;

export default FirstName;
