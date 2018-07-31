import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import KrogerIcon from 'components/KrogerIcon';
import RovisysIcon from 'components/RovisysIcon';

import messages from './messages';

const styles = theme => ({
  icon: {
    fontSize: '3em',
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

function ResumeExperience({ classes }) {
  return (
    <Grid container direction="column" spacing={8}>
      <Grid item>
        <Card>
          <CardContent>
            <Grid container direction="row" alignItems="center" spacing={16}>
              <Grid item>
                <KrogerIcon className={classes.icon} />
              </Grid>
              <Grid item xs>
                <Typography
                  className={classes.title}
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
            <Grid container direction="row" alignItems="center" spacing={16}>
              <Grid item>
                <RovisysIcon className={classes.icon} />
              </Grid>
              <Grid item xs>
                <Typography
                  className={classes.title}
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
  );
}

ResumeExperience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeExperience);
