import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import { makeSelectLocation } from 'containers/App/selectors';
import SideNavItem from 'components/SideNavItem';
import routes from 'routes';

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

export function SideNav({
  classes,
  className,
  location,
  mobileOpen,
  onClose,
  onOpen,
}) {
  const sideNavContent = (
    <List component="nav">
      {routes
        .filter(route => route.includeInSidenav)
        .map(route => (
          <SideNavItem
            key={route.path}
            href={route.path}
            message={route.message}
            icon={route.icon}
            active={location.pathname === route.path}
            onClick={onClose}
          />
        ))}
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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

const withConnect = connect(
  createStructuredSelector({
    location: makeSelectLocation(),
  }),
);

export default compose(
  withConnect,
  withStyles(styles),
)(SideNav);
