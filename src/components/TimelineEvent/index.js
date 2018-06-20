import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import EventIcon from '@material-ui/icons/Event';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  container: {
    display: 'flex',
  },
  lineContainer: {
    width: '75px',
    display: 'flex',
    justifyContent: 'center',
  },
  line: {
    position: 'relative',
    left: '50%',
    width: '2px',
    height: '100%',
    backgroundColor: theme.palette.primary[100],
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  title: {
    flex: '1 auto',
    fontWeight: theme.typography.fontWeightMedium,
  },
  event: {
    flex: '1 auto',
    marginLeft: '20px',
    paddingBottom: '15px',
  },
});

function TimelineEvent(props) {
  const { classes, name, description, start, end, icon } = props;

  const IconComponent = icon || EventIcon;

  return (
    <div className={classes.container}>
      <div className={classes.lineContainer}>
        <div className={classes.line} />
        <Avatar className={classes.avatar}>
          <IconComponent />
        </Avatar>
      </div>
      <div className={classes.event}>
        <div className={classes.container}>
          <Typography className={classes.title} variant="subheading" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {`${start.getFullYear()} - ${end ? end.getFullYear() : 'CURRENT'}`}
          </Typography>
        </div>

        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <Divider />
      </div>
    </div>
  );
}

TimelineEvent.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  description: PropTypes.string,
  start: PropTypes.object,
  end: PropTypes.object,
  icon: PropTypes.any,
};

export default withStyles(styles)(TimelineEvent);
