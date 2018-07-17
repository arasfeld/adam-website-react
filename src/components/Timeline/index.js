import React from 'react';
import PropTypes from 'prop-types';

import TimelineEvent from 'components/TimelineEvent';

function Timeline({ events }) {
  return events.map(event => <TimelineEvent key={event.name} {...event} />);
}

Timeline.propTypes = {
  events: PropTypes.array,
};

export default Timeline;
