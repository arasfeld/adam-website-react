import styled from 'styled-components';
import theme from 'utils/theme';

export default styled.h1`
  color: ${theme.palette.secondaryText};
  font-family: Dosis, arial, sans-serif;
  font-size: 2.813rem;
  font-weight: ${theme.typography.fontWeightRegular};
  letter-spacing: 10px;
  line-height: 1.13em;
  margin-bottom: 0.35em;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;
