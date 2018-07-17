import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedDate, FormattedTime } from 'react-intl';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import EqualizerIcon from 'components/EqualizerIcon';

const styles = theme => ({
  playingContainer: {
    display: 'flex',
  },
  playingIcon: {
    marginRight: theme.spacing.unit,
  },
});

function Track(props) {
  const { classes, album, artist, date, image, name } = props;

  const icon = image ? (
    <Avatar alt={album} src={image} />
  ) : (
    <Avatar>
      <MusicNoteIcon />
    </Avatar>
  );

  const timestamp = date ? (
    <Typography>
      <FormattedDate value={date} />
      &nbsp;
      <FormattedTime value={date} />
    </Typography>
  ) : (
    <div className={classes.playingContainer}>
      <EqualizerIcon className={classes.playingIcon} color="primary" />
      <Typography>Now Playing</Typography>
    </div>
  );

  return (
    <ListItem>
      {icon}
      <ListItemText>{`${artist} - ${name}`}</ListItemText>
      {timestamp}
    </ListItem>
  );
}

Track.propTypes = {
  classes: PropTypes.object.isRequired,
  album: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  date: PropTypes.object,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(Track);
