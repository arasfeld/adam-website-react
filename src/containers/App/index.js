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
import { makeSelectLocation, makeSelectMobileSideNav } from './selectors';

const styles = (theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    maxHeight: '100vh',
    width: '100%',
  },
  main: {
    display: 'flex',
    flex: '1 auto',
    flexDirection: 'column',
    maxHeight: '100vh',
    overflowY: 'auto',
  },
  page: {
    flex: '1 auto',
    margin: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

function App(props) {
  const { classes, location, mobileOpen, onCloseSideNav, onOpenSideNav, onToggleSideNav } = props;

  return (
    <div className={classes.root}>
      <Helmet
        titleTemplate="%s - Adam Rasfeld"
        defaultTitle="Adam Rasfeld"
      >
        <meta name="description" content="My personal website written with React.js" />
      </Helmet>
      <header>
        <Header toggleSideNav={onToggleSideNav} />
      </header>
      <div className={classes.content}>
        <SideNav
          currentPage={location.pathname}
          mobileOpen={mobileOpen}
          onClose={onCloseSideNav}
          onOpen={onOpenSideNav}
        />
        <main className={classes.main}>
          <div className={classes.page}>
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
          </div>
          <footer>
            <Footer />
          </footer>
        </main>
      </div>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
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
  location: makeSelectLocation(),
  mobileOpen: makeSelectMobileSideNav(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
  withStyles(styles),
)(App);
