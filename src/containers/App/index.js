/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

import Header from 'components/Header';
import Footer from 'components/Footer';
import SideNav from 'components/SideNav';
import routes from 'routes';
import { closeSideNav, openSideNav, toggleSideNav } from './actions';
import { makeSelectPathname, makeSelectLayout } from './selectors';

const styles = (theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: '100vh',
    overflowY: 'auto',
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

function App(props) {
  const { classes, mobileOpen, onCloseSideNav, onOpenSideNav, onToggleSideNav, pathname } = props;

  return (
    <div className={classes.root}>
      <Helmet
        titleTemplate="%s - Adam Rasfeld"
        defaultTitle="Adam Rasfeld"
      >
        <meta name="description" content="My personal website written with React.js" />
      </Helmet>
      <Header toggleSideNav={onToggleSideNav} />
      <SideNav
        currentPage={pathname}
        mobileOpen={mobileOpen}
        onClose={onCloseSideNav}
        onOpen={onOpenSideNav}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
        <Footer />
      </main>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  onCloseSideNav: PropTypes.func.isRequired,
  onOpenSideNav: PropTypes.func.isRequired,
  onToggleSideNav: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onCloseSideNav: () => dispatch(closeSideNav()),
    onOpenSideNav: () => dispatch(openSideNav()),
    onToggleSideNav: () => dispatch(toggleSideNav()),
  };
}

const mapStateToProps = createStructuredSelector({
  pathname: makeSelectPathname(),
  mobileOpen: makeSelectLayout(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  withStyles(styles),
)(App);
