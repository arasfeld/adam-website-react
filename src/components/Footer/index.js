import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

const styles = (theme) => ({
  link: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
});

function Footer(props) {
  const { classes } = props;

  return (
    <Grid container justify="space-between">
      <Grid item>
        <Typography gutterBottom noWrap>
          <FormattedMessage {...messages.licenseMessage} />
        </Typography>
      </Grid>
      <Grid item>
        <LocaleToggle />
      </Grid>
      <Grid item>
        <Typography gutterBottom noWrap>
          <FormattedMessage
            {...messages.authorMessage}
            values={{
              author: <a className={classes.link} href="https://github.com/arasfeld">Adam Rasfeld</a>,
            }}
          />
        </Typography>
      </Grid>
    </Grid>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
