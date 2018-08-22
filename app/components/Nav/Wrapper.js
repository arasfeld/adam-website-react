import styled from 'styled-components';
import { md } from 'static/breakpoints';

export default styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  float: right;

  @media (max-width: ${md}) {
    align-items: stretch;
    background: #212121;
    border: 1px solid #414141;
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
