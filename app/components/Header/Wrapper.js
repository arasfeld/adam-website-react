import styled from 'styled-components';
import theme from 'utils/theme';

export default styled.header`
  align-items: center;
  background: ${theme.palette.backgroundColor2};
  border-bottom: 1px solid ${theme.palette.backgroundColor3};
  box-shadow: none;
  display: flex;
  height: 75px;
  justify-content: space-between;
  padding: 0 2%;
  position: relative;
`;
