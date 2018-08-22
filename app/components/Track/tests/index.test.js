import React from 'react';
import { shallow } from 'enzyme';

import Image from '../Image';
import Text from '../Text';
import Timestamp from '../Timestamp';
import Track from '../index';

describe('<Track />', () => {
  it('should render the image', () => {
    const props = {
      album: 'Test Album',
      artist: 'Test Artist',
      image: '',
      name: 'Test name',
      date: new Date(),
    };
    const renderedComponent = shallow(<Track {...props} />);
    expect(renderedComponent.find(Image)).toHaveLength(1);
  });

  it('should render the text', () => {
    const props = {
      album: 'Test Album',
      artist: 'Test Artist',
      image: '',
      name: 'Test name',
      date: new Date(),
    };
    const renderedComponent = shallow(<Track {...props} />);
    expect(renderedComponent.find(Text)).toHaveLength(1);
  });

  it('should render <Timestamp />', () => {
    const props = {
      album: 'Test Album',
      artist: 'Test Artist',
      image: '',
      name: 'Test name',
    };
    const renderedComponent = shallow(<Track {...props} />);
    expect(renderedComponent.find(Timestamp)).toHaveLength(1);
  });
});
