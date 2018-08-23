import { injectGlobal } from 'styled-components';
import Dosis from 'fonts/Dosis.ttf';
import YanoneKaffeesatz from 'fonts/YanoneKaffeesatz.ttf';
import theme from 'utils/theme';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Yanone Kaffeesatz';
    src: url('${YanoneKaffeesatz}') format('truetype');
  }

  @font-face {
    font-family: 'Dosis';
    src: url('${Dosis}') format('truetype');
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: ${theme.palette.backgroundColor1};
    color: ${theme.palette.primaryText};
    min-height: 100%;
    min-width: 100%;
  }
`;
