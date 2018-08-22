import React from 'react';
import PropTypes from 'prop-types';

function OwnedGame({ name, logoImage }) {
  return (
    <div>
      <img src={logoImage} alt={name} />
    </div>
  );
}

OwnedGame.propTypes = {
  name: PropTypes.string.isRequired,
  logoImage: PropTypes.string.isRequired,
};

export default OwnedGame;
