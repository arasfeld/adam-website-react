import styled from 'styled-components';
import { secondaryText } from 'static/colors';
import { fontWeightRegular } from 'static/typography';

export default styled.h1`
  color: ${secondaryText};
  font-size: 2.813rem;
  font-weight: ${fontWeightRegular};
  line-height: 1.13em;
  margin-bottom: 0.35em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
