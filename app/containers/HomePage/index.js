/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';
import CenteredSection from './CenteredSection';
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

        <div>
          <H2>
            <FormattedMessage {...messages.header} />
          </H2>
          <CenteredSection>
            <p>
              <FormattedMessage {...messages.about} />
            </p>
          </CenteredSection>
        </div>
      </article>
    );
  }
}

export default HomePage;
