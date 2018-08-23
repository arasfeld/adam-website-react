import styled from 'styled-components';
import theme from 'utils/theme';

const Card = styled.div`
  background: ${theme.palette.backgroundColor2};
  border-bottom: 1px solid ${theme.palette.backgroundColor3};
  border-top: 1px solid ${theme.palette.backgroundColor3};
  padding: 16px;
`;

export default Card;
