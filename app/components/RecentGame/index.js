import React from 'react';
import PropTypes from 'prop-types';

import Activity from './Activity';
import Image from './Image';
import Text from './Text';
import Wrapper from './Wrapper';

function RecentGame({ iconImage, name, recentPlaytime }) {
  return (
    <Wrapper>
      <Image alt={name} src={iconImage} />
      <Text>{name}</Text>
      <Activity recentPlaytime={recentPlaytime} />
    </Wrapper>
  );
}

RecentGame.propTypes = {
  iconImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  recentPlaytime: PropTypes.number.isRequired,
};

export default RecentGame;
