import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Me from 'images/me.png';
import messages from './messages';

const styles = theme => ({
  container: {
    display: 'flex',
  },
  avatar: {
    background: theme.palette.grey[600],
    width: 150,
    height: 150,
  },
  content: {
    display: 'flex',
    flex: '1 auto',
    flexDirection: 'column',
    margin: '10px',
  },
  firstName: {
    ...theme.typography.display1,
  },
  lastName: {
    ...theme.typography.display1,
    fontWeight: theme.typography.fontWeightLight,
  },
});

function ResumeHeader({ classes }) {
  return (
    <Card>
      <CardContent>
        <div className={classes.container}>
          <Avatar className={classes.avatar} src={Me} />
          <div className={classes.content}>
            <div>
              <span className={classes.firstName}>ADAM</span>
              &nbsp;
              <span className={classes.lastName}>RASFELD</span>
            </div>
            <Typography variant="subheading" gutterBottom>
              <FormattedMessage {...messages.title} />
            </Typography>
            <Typography variant="body1" paragraph>
              <FormattedMessage {...messages.summary} />
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

ResumeHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumeHeader);
