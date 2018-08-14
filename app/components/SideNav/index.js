import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import SideNavItem from 'components/SideNavItem';
import routes from 'routes';
import OctocatIcon from './OctocatIcon';
import messages from './messages';

const styles = theme => ({
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

export function SideNav({ classes, className, mobileOpen, onClose, onOpen }) {
  const sideNavContent = (
    <List component="nav">
      {routes.filter(route => route.includeInSidenav).map(route => (
        <SideNavItem
          key={route.path}
          href={route.path}
          message={route.message}
          icon={route.icon}
          onClick={onClose}
        />
      ))}
      <SideNavItem
        key="github"
        href="https://github.com/arasfeld"
        message={messages.github}
        icon={OctocatIcon}
        onClick={onClose}
      />
    </List>
  );

  return (
    <div className={className}>
      <Hidden mdUp>
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
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {sideNavContent}
        </SwipeableDrawer>
      </Hidden>
      <Hidden smDown implementation="css">
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
  mobileOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default withStyles(styles)(SideNav);
