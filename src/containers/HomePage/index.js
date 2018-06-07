/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Typography from '@material-ui/core/Typography';

import messages from './messages';

function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A React.js Boilerplate application homepage" />
      </Helmet>
      <div>
        <Typography variant="display1" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
      </div>
    </article>
  );
}

export default HomePage;
