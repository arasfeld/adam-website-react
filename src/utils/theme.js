import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

const theme = {
  palette: {
    type: 'dark',
    primary: green,
    secondary: pink,
    error: red,
  },
};

export default createMuiTheme(theme);
