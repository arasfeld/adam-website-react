import styled from 'styled-components';
import theme from 'utils/theme';

const Wrapper = styled.footer`
  background: ${theme.palette.backgroundColor2};
  border-top: 1px solid ${theme.palette.backgroundColor3};
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

export default Wrapper;
