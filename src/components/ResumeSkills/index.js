import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import AngularIcon from 'components/AngularIcon';
import CSharpIcon from 'components/CSharpIcon';
import DotNetCoreIcon from 'components/DotNetCoreIcon';
import MongoIcon from 'components/MongoIcon';
import ReactIcon from 'components/ReactIcon';

const styles = () => ({
  icon: {
    fontSize: '6em',
  },
});

function ResumeSkills({ classes }) {
  return (
    <Card>
      <CardContent>
        <Grid container justify="space-around" spacing={16}>
          <Grid item>
            <ReactIcon className={classes.icon} />
            <Typography variant="subheading" align="center">
              React
            </Typography>
          </Grid>
          <Grid item>
            <AngularIcon className={classes.icon} />
            <Typography variant="subheading" align="center">
              Angular
            </Typography>
          </Grid>
          <Grid item>
            <CSharpIcon className={classes.icon} />
            <Typography variant="subheading" align="center">
              C#
            </Typography>
          </Grid>
          <Grid item>
            <DotNetCoreIcon className={classes.icon} />
            <Typography variant="subheading" align="center">
              .NET Core
            </Typography>
          </Grid>
          <Grid item>
            <MongoIcon className={classes.icon} />
            <Typography variant="subheading" align="center">
              MongoDB
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

ResumeSkills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeSkills);
