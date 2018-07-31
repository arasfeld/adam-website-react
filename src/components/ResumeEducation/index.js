import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MiamiIcon from 'components/MiamiIcon';

// import messages from './messages';

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
              B.S. Computer Science @ Miami University
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" gutterBottom>
              2009 - 2014
            </Typography>
          </Grid>
        </Grid>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent>
    </Card>
  );
}

ResumeEducation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeEducation);
