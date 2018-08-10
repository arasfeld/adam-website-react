/*
 * ResumePage
 *
 * List my resume
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AngularIcon from 'components/AngularIcon';
import CSharpIcon from 'components/CSharpIcon';
import DotNetCoreIcon from 'components/DotNetCoreIcon';
import KrogerIcon from 'components/KrogerIcon';
import MiamiIcon from 'components/MiamiIcon';
import MongoIcon from 'components/MongoIcon';
import ReactIcon from 'components/ReactIcon';
import RovisysIcon from 'components/RovisysIcon';

import Me from 'images/me.png';
import { fontWeightMedium } from 'static/typography';
import FirstName from './FirstName';
import HeaderImage from './HeaderImage';
import LastName from './LastName';
import messages from './messages';

const styles = {
  bigIcon: {
    fontSize: '6em',
  },
  smallIcon: {
    fontSize: '3em',
  },
  cardTitle: {
    fontWeight: fontWeightMedium,
  },
};

class ResumePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Resume</title>
          <meta
            name="description"
            content="Resume page of Adam Rasfeld's website"
          />
        </Helmet>

        <Grid container direction="column" spacing={8}>
          <Grid item>
            <Card>
              <CardContent>
                <Grid container direction="row" spacing={16}>
                  <Grid item>
                    <HeaderImage src={Me} />
                  </Grid>
                  <Grid item xs>
                    <div>
                      <FirstName>ADAM</FirstName>
                      <LastName>RASFELD</LastName>
                    </div>
                    <Typography variant="subheading" gutterBottom>
                      <FormattedMessage {...messages.title} />
                    </Typography>
                    <Typography variant="body1" paragraph>
                      <FormattedMessage {...messages.summary} />
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Typography variant="headline" gutterBottom>
              <FormattedMessage {...messages.experienceHeader} />
            </Typography>
            <Grid container direction="column" spacing={8}>
              <Grid item>
                <Card>
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={16}
                    >
                      <Grid item>
                        <KrogerIcon style={styles.smallIcon} />
                      </Grid>
                      <Grid item xs>
                        <Typography
                          style={styles.cardTitle}
                          variant="subheading"
                          gutterBottom
                        >
                          <FormattedMessage {...messages.krogerTitle} />
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" gutterBottom>
                          <FormattedMessage {...messages.krogerDates} />
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography variant="body1" paragraph>
                      <FormattedMessage {...messages.krogerDescription} />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item>
                <Card>
                  <CardContent>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      spacing={16}
                    >
                      <Grid item>
                        <RovisysIcon style={styles.smallIcon} />
                      </Grid>
                      <Grid item xs>
                        <Typography
                          style={styles.cardTitle}
                          variant="subheading"
                          gutterBottom
                        >
                          <FormattedMessage {...messages.rovisysTitle} />
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" gutterBottom>
                          <FormattedMessage {...messages.rovisysDates} />
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography variant="body1" paragraph>
                      <FormattedMessage {...messages.rovisysDescription} />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Typography variant="headline" gutterBottom>
              <FormattedMessage {...messages.skillsHeader} />
            </Typography>
            <Card>
              <CardContent>
                <Grid container justify="space-around" spacing={16}>
                  <Grid item>
                    <ReactIcon style={styles.bigIcon} />
                    <Typography variant="subheading" align="center">
                      React
                    </Typography>
                  </Grid>
                  <Grid item>
                    <AngularIcon style={styles.bigIcon} />
                    <Typography variant="subheading" align="center">
                      Angular
                    </Typography>
                  </Grid>
                  <Grid item>
                    <CSharpIcon style={styles.bigIcon} />
                    <Typography variant="subheading" align="center">
                      C#
                    </Typography>
                  </Grid>
                  <Grid item>
                    <DotNetCoreIcon style={styles.bigIcon} />
                    <Typography variant="subheading" align="center">
                      .NET Core
                    </Typography>
                  </Grid>
                  <Grid item>
                    <MongoIcon style={styles.bigIcon} />
                    <Typography variant="subheading" align="center">
                      MongoDB
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Typography variant="headline" gutterBottom>
              <FormattedMessage {...messages.educationHeader} />
            </Typography>
            <Card>
              <CardContent>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  spacing={16}
                >
                  <Grid item>
                    <MiamiIcon style={styles.smallIcon} />
                  </Grid>
                  <Grid item xs>
                    <Typography
                      style={styles.cardTitle}
                      variant="subheading"
                      gutterBottom
                    >
                      <FormattedMessage {...messages.miamiTitle} />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" gutterBottom>
                      <FormattedMessage {...messages.miamiDates} />
                    </Typography>
                  </Grid>
                </Grid>
                <Typography variant="body1" paragraph>
                  <FormattedMessage {...messages.miamiDescription} />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ResumePage;
