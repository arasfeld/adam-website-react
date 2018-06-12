import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';

import SideNavItem from 'components/SideNavItem';
import messages from './messages';

const styles = (theme) => ({
  drawerPaper: {
    backgroundColor: theme.palette.background.paper,
    width: 250,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  toolbar: theme.mixins.toolbar,
});

// iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

function SideNav(props) {
  const { classes, className, currentPage, mobileOpen, onClose, onOpen } = props;

  const sideNavContent = (
    <List component="nav">
      <SideNavItem href="/" message={messages.home} active={currentPage === '/'} onClick={onClose} />
      <SideNavItem href="/music" message={messages.music} active={currentPage === '/music'} onClick={onClose} />
      <SideNavItem href="/resume" message={messages.resume} active={currentPage === '/resume'} onClick={onClose} />
    </List>
  );

  return (
    <div className={className}>
      <Hidden lgUp>
        <SwipeableDrawer
          classes={{
            paper: classes.drawerPaper,
          }}
          disableBackdropTransition={!iOS}
          variant="temporary"
          open={mobileOpen}
          onOpen={onOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {sideNavContent}
        </SwipeableDrawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <div className={classes.toolbar} />
          {sideNavContent}
        </Drawer>
      </Hidden>
    </div>
  );
}

SideNav.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  currentPage: PropTypes.string.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(SideNav);
