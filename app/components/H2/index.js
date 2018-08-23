import styled from 'styled-components';
import theme from 'utils/theme';

export default styled.h2`
  color: ${theme.palette.secondaryText};
  font-family: Dosis, arial, sans-serif;
  font-size: 2.125rem;
  font-weight: ${theme.typography.fontWeightRegular};
  letter-spacing: 5px;
  line-height: 1.21em;
  margin-bottom: 0.35em;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;
