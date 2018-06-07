/*
 * ResumePage
 *
 * List my resume
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Typography from '@material-ui/core/Typography';

import messages from './messages';

export default class ResumePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Résumé</title>
          <meta name="description" content="Résumé page of React.js Boilerplate application" />
        </Helmet>
        <Typography variant="display2" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
      </div>
    );
  }
}
