/*
 * ContactPage
 *
 * Allow users to contact me via email
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

export function ContactPage() {
  return (
    <article>
      <Helmet>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Contact page of Adam Rasfeld's website"
        />
      </Helmet>
      <div>
        <H1 variant="display2" gutterBottom>
          <FormattedMessage {...messages.header} />
        </H1>

        <span>contact me</span>
      </div>
    </article>
  );
}

export default ContactPage;
