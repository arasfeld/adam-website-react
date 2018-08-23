import styled from 'styled-components';
import theme from 'utils/theme';

export default styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  float: right;

  @media (max-width: ${theme.breakpoints.md}) {
    align-items: stretch;
    background: ${theme.palette.backgroundColor2};
    border: 1px solid ${theme.palette.backgroundColor3};
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    transition: height 0.27s cubic-bezier(0, 0, 0.58, 1);
    width: 100%;

    &.mobile-open {
      display: flex;
    }
  }
`;
