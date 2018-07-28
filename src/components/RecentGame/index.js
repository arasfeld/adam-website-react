import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';

import messages from './messages';

function RecentGame({ iconImage, name, recentPlaytime }) {
  const icon = iconImage ? (
    <Avatar alt={name} src={iconImage} />
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
            hours: Math.round((recentPlaytime / 60) * 10) / 10,
          }}
        />
      </Typography>
    </ListItem>
  );
}

RecentGame.propTypes = {
  iconImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  recentPlaytime: PropTypes.number.isRequired,
};

export default RecentGame;
