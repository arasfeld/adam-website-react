import styled from 'styled-components';
import theme from 'utils/theme';

export default styled.h3`
  color: ${theme.palette.primaryText};
  font-size: 1.5em;
  font-weight: ${theme.typography.fontWeightRegular};
  line-height: 1.35em;
  margin-bottom: 0.35em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
