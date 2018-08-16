import styled from 'styled-components';
import { sm } from 'static/breakpoints';
import { primaryText } from 'static/colors';
import { fontFamily } from 'static/typography';

const ArtistOverlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  color: ${primaryText};
  font-family: ${fontFamily};
  height: 48px;
  left: 0;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: absolute;
  right: 0;

  @media (max-width: ${sm}) {
    display: none;
  }
`;

export default ArtistOverlay;
