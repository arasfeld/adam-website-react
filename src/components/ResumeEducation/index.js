import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MiamiIcon from 'components/MiamiIcon';

import messages from './messages';

const styles = theme => ({
  icon: {
    fontSize: '3em',
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
  },
});

function ResumeEducation({ classes }) {
  return (
    <Card>
      <CardContent>
        <Grid container direction="row" alignItems="center" spacing={16}>
          <Grid item>
            <MiamiIcon className={classes.icon} />
          </Grid>
          <Grid item xs>
            <Typography
              className={classes.title}
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
  );
}

ResumeEducation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeEducation);
