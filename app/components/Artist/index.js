import React from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import Label from './Label';
import Overlay from './Overlay';
import Wrapper from './Wrapper';

function Artist({ name, image }) {
  return (
    <Wrapper>
      <Image src={image} alt={name} />
      <Overlay>
        <Label>{name}</Label>
      </Overlay>
    </Wrapper>
  );
}

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Artist;
