import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

import messages from './messages';

function RecentGame({ image, name, playtime }) {
  const icon = image ? (
    <Avatar alt={name} src={image} />
  ) : (
    <Avatar>
      <VideogameAssetIcon />
    </Avatar>
  );

  return (
    <ListItem>
      {icon}
      <ListItemText primary={name} />
      <Typography>
        <FormattedMessage
          {...messages.activity}
          values={{
            hours: Math.round((playtime / 60) * 10) / 10,
          }}
        />
      </Typography>
    </ListItem>
  );
}

RecentGame.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  playtime: PropTypes.number.isRequired,
};

export default RecentGame;
