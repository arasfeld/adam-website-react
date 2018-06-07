import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import messages from './messages';

const styles = (theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    },
  },
});

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes, toggleSideNav } = this.props;

    return (
      <AppBar position="absolute" className={classes.root}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Menu"
            className={classes.navIconHide}
            onClick={toggleSideNav}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            <FormattedMessage {...messages.title} />
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleSideNav: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);
