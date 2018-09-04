import styled from 'styled-components';
import theme from 'utils/theme';

export default styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  float: right;

  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s,
    z-index 0s linear 0.01s;

  @media (max-width: ${theme.breakpoints.md}) {
    align-items: stretch;
    background: ${theme.palette.backgroundColor2};
    border: 1px solid ${theme.palette.backgroundColor3};
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    width: 100%;

    &.mobile-open {
      display: flex;
    }
  }
`;
