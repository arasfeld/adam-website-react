/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import messages from './messages';

class HomePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="Home page of Adam Rasfeld's website"
          />
        </Helmet>

        <Grid container direction="column" spacing={16}>
          <Grid item xs={12}>
            <Typography variant="display2" gutterBottom>
              <FormattedMessage {...messages.header} />
            </Typography>
            <Typography variant="body1" gutterBottom>
              <FormattedMessage {...messages.about} />
            </Typography>
          </Grid>
        </Grid>
      </article>
    );
  }
}

export default HomePage;
