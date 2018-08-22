import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Activity({ recentPlaytime }) {
  return (
    <FormattedMessage
      {...messages.activity}
      values={{
        hours: Math.round((recentPlaytime / 60) * 10) / 10,
      }}
    />
  );
}

Activity.propTypes = {
  recentPlaytime: PropTypes.number,
};

export default Activity;
