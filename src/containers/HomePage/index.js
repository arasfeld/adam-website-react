/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import MaterialUiLogo from './material-ui.png';
import ReactLogo from './react.png';
import ReduxLogo from './redux.png';

import messages from './messages';

const styles = theme => ({
  card: {
    marginTop: theme.spacing.unit * 2,
  },
  cardContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  cardContent: {
    display: 'flex',
    flex: '1 auto',
    flexDirection: 'column',
    margin: '10px',
  },
  cardImage: {
    maxHeight: 100,
    maxWidth: 100,
  },
});

class HomePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { classes } = this.props;

    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="Home page of Adam Rasfeld's website"
          />
        </Helmet>
        <div>
          <Typography variant="display2" gutterBottom>
            <FormattedMessage {...messages.header} />
          </Typography>
          <Typography variant="body1" gutterBottom>
            My name is Adam Rasfeld and this is my personal website. As I dont
            really have anything particularly interesting to put out into the
            world, this is more or less a pet project that I started to help
            myself learn React and other technologies that I am interested in.
          </Typography>

          <Card className={classes.card}>
            <CardContent className={classes.cardContainer}>
              <img className={classes.cardImage} src={ReactLogo} alt="React" />
              <div className={classes.cardContent}>
                <Typography variant="title" gutterBottom>
                  React
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </div>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent className={classes.cardContainer}>
              <div className={classes.cardContent}>
                <Typography variant="title" gutterBottom>
                  Redux
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </div>
              <img className={classes.cardImage} src={ReduxLogo} alt="Redux" />
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent className={classes.cardContainer}>
              <img
                className={classes.cardImage}
                src={MaterialUiLogo}
                alt="Material-UI"
              />
              <div className={classes.cardContent}>
                <Typography variant="title" gutterBottom>
                  Material-UI
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomePage);
