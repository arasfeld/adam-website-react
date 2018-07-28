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

import Feature from 'components/Feature';
import LastFmLogo from './images/lastfm.png';
import MailgunLogo from './images/mailgun.png';
import ReactLogo from './images/react.png';
import SteamLogo from './images/steam.png';
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
              My name is Adam Rasfeld and this is my personal website. As I dont
              really have anything particularly interesting to put out into the
              world, this is more or less a pet project that I started to help
              myself learn React and other technologies that I am interested in.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Feature
              title={<FormattedMessage {...messages.reactTitle} />}
              body={<FormattedMessage {...messages.reactBody} />}
              image={ReactLogo}
              imagePosition="left"
            />
          </Grid>
          <Grid item xs={12}>
            <Feature
              title={<FormattedMessage {...messages.lastFmTitle} />}
              body={<FormattedMessage {...messages.lastFmBody} />}
              image={LastFmLogo}
              imagePosition="right"
            />
          </Grid>
          <Grid item xs={12}>
            <Feature
              title={<FormattedMessage {...messages.steamTitle} />}
              body={<FormattedMessage {...messages.steamBody} />}
              image={SteamLogo}
              imagePosition="left"
            />
          </Grid>
          <Grid item xs={12}>
            <Feature
              title={<FormattedMessage {...messages.mailgunTitle} />}
              body={<FormattedMessage {...messages.mailgunBody} />}
              image={MailgunLogo}
              imagePosition="right"
            />
          </Grid>
        </Grid>
      </article>
    );
  }
}

export default HomePage;
