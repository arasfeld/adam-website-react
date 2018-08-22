import { injectGlobal } from 'styled-components';
import { primaryText } from 'static/colors';
import Dosis from 'fonts/Dosis.ttf';
import YanoneKaffeesatz from 'fonts/YanoneKaffeesatz.ttf';

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
    background-color: #191919;
    color: ${primaryText};
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
