import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Me from './me.png';

const styles = (theme) => ({
  container: {
    display: 'flex',
  },
  avatar: {
    background: theme.palette.grey[600],
    width: 151,
    height: 151,
  },
  content: {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    margin: '10px',
  },
  name: {
    ...theme.typography.display1,
  },
  lastName: {
    fontWeight: theme.typography.fontWeightLight,
  },
});

function ResumeHeader({ classes }) {
  return (
    <div className={classes.container}>
      <Avatar
        className={classes.avatar}
        src={Me}
        title="Live from space album cover"
      />
      <div className={classes.content}>
        <div className={classes.name}>
          <span>ADAM</span>
          &nbsp;
          <span className={classes.lastName}>RASFELD</span>
        </div>
        <Typography variant="subheading" gutterBottom>
          Web Developer
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
    </div>
  );
}

ResumeHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeHeader);
