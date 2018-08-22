import React from 'react';
import { shallow } from 'enzyme';

import Image from '../Image';

describe('<Image />', () => {
  it('should render an <img> tag', () => {
    const renderedComponent = shallow(<Image />);
    expect(renderedComponent.type()).toEqual('img');
  });
});
