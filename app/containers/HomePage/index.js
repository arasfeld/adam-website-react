/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Card from 'components/Card';
import SlamDunk from 'images/slam-dunk.png';
import Hero from './Hero';
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
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>

        <Hero src={SlamDunk} />

        <Card>
          <p>
            <FormattedMessage {...messages.about} />
          </p>
        </Card>
      </article>
    );
  }
}

export default HomePage;
