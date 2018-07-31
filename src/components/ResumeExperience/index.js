import React from 'react';
import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import KrogerIcon from 'components/KrogerIcon';
import RovisysIcon from 'components/RovisysIcon';

// import messages from './messages';

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
                  Web Developer @ Kroger Digital
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  2018 - CURRENT
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                  Software Developer II @ RoviSys
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" gutterBottom>
                  2014 - 2018
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
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
