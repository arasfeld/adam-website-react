import styled from 'styled-components';
import { primaryText } from 'static/colors';
import { fontWeightRegular } from 'static/typography';

export default styled.h3`
  color: ${primaryText};
  font-size: 1.5em;
  font-weight: ${fontWeightRegular};
  line-height: 1.35em;
  margin-bottom: 0.35em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
