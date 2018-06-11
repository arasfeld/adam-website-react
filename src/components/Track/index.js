import React from 'react';
import PropTypes from 'prop-types';
import { FormattedDate, FormattedTime } from 'react-intl';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

function Track(props) {
  const { album, artist, date, image, name } = props;

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
    <Typography>
      Now Playing
    </Typography>
  );

  return (
    <ListItem>
      {icon}
      <ListItemText>
        {`${artist} - ${name}`}
      </ListItemText>
      {timestamp}
    </ListItem>
  );
}

Track.propTypes = {
  album: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Track;
