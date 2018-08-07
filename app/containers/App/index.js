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
import { Switch, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import SideNav from 'containers/SideNav';
import Header from 'components/Header';
import Footer from 'components/Footer';
import routes from 'routes';

const styles = theme => ({
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

class App extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerOpen = () => {
    this.setState({ mobileOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ mobileOpen: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet titleTemplate="%s - Adam Rasfeld" defaultTitle="Adam Rasfeld">
          <meta
            name="description"
            content="My personal website written with React.js"
          />
        </Helmet>
        <header>
          <Header toggleSideNav={this.handleDrawerOpen} />
        </header>
        <div className={classes.content}>
          <SideNav
            mobileOpen={this.state.mobileOpen}
            onClose={this.handleDrawerClose}
            onOpen={this.handleDrawerOpen}
          />
          <main className={classes.main}>
            <div className={classes.page}>
              <div className={classes.toolbar} />
              <Switch>
                {routes.map(route => (
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
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
