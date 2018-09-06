import React from 'react';
import PropTypes from 'prop-types';
import {
  FormattedDate,
  FormattedMessage,
  FormattedRelative,
  FormattedTime,
} from 'react-intl';

import theme from 'utils/theme';
import EqualizerIcon from './EqualizerIcon';
import messages from './messages';

function Timestamp({ date }) {
  if (!date) {
    return (
      <div>
        <EqualizerIcon color={theme.palette.primaryColor} />
        <FormattedMessage {...messages.playing} />
      </div>
    );
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const yesterday = Date.now() - oneDay;

  if (date > yesterday) {
    return (
      <span>
        <FormattedRelative value={date} />
      </span>
    );
  }

  return (
    <span>
      <FormattedDate value={date} />
      &nbsp;
      <FormattedTime value={date} />
    </span>
  );
}

Timestamp.propTypes = {
  date: PropTypes.object,
};

export default Timestamp;
