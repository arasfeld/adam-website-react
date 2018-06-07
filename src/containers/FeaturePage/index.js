/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import messages from './messages';

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <Typography variant="display2" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="subheading" gutterBottom noWrap>
              <FormattedMessage {...messages.scaffoldingHeader} />
            </Typography>
            <Typography variant="body1" paragraph>
              <FormattedMessage {...messages.scaffoldingMessage} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subheading" gutterBottom noWrap>
              <FormattedMessage {...messages.feedbackHeader} />
            </Typography>
            <Typography variant="body1" paragraph>
              <FormattedMessage {...messages.feedbackMessage} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subheading" gutterBottom noWrap>
              <FormattedMessage {...messages.routingHeader} />
            </Typography>
            <Typography variant="body1" paragraph>
              <FormattedMessage {...messages.routingMessage} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subheading" gutterBottom noWrap>
              <FormattedMessage {...messages.networkHeader} />
            </Typography>
            <Typography variant="body1" paragraph>
              <FormattedMessage {...messages.networkMessage} />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subheading" gutterBottom noWrap>
              <FormattedMessage {...messages.intlHeader} />
            </Typography>
            <Typography variant="body1" paragraph>
              <FormattedMessage {...messages.intlMessage} />
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
