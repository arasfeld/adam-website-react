import { createMuiTheme } from '@material-ui/core/styles';

import {
  primaryColor,
  primaryColorDark,
  primaryColorLight,
  accentColor,
  accentColorDark,
  accentColorLight,
  errorColor,
  errorColorDark,
  errorColorLight,
} from './colors';

export default createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: primaryColorLight,
      main: primaryColor,
      dark: primaryColorDark,
    },
    secondary: {
      light: accentColorLight,
      main: accentColor,
      dark: accentColorDark,
    },
    error: {
      light: errorColorLight,
      main: errorColor,
      dark: errorColorDark,
    },
  },
});
