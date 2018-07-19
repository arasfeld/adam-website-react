import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    paddingBottom: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
  },
});

function Meter({ classes, name, value, maxValue }) {
  return (
    <div className={classes.root}>
      <Grid container justify="space-between" spacing={8}>
        <Grid item>
          <Typography variant="body1" gutterBottom>
            {name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" gutterBottom>
            {`${value} / ${maxValue}`}
          </Typography>
        </Grid>
      </Grid>
      <LinearProgress variant="determinate" value={(value / maxValue) * 100} />
    </div>
  );
}

Meter.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  value: PropTypes.number,
  maxValue: PropTypes.number,
};

Meter.defaultProps = {
  name: '',
  value: 0,
  maxValue: 10,
};

export default withStyles(styles)(Meter);
