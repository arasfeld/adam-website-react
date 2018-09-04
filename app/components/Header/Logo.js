import styled from 'styled-components';
import theme from 'utils/theme';

const Logo = styled.div`
  color: ${theme.palette.primaryColor};
  font-family: 'Yanone Kaffeesatz', sans-serif;
  font-size: 2em;
  letter-spacing: 5px;
  margin-right: 20px;
  text-transform: uppercase;
`;

export default Logo;
