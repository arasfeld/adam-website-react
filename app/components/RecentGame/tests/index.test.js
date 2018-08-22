import React from 'react';
import { shallow } from 'enzyme';

import Activity from '../Activity';
import Image from '../Image';
import Text from '../Text';
import RecentGame from '../index';

describe('<Track />', () => {
  it('should render the image', () => {
    const props = {
      image: '',
      name: 'Test name',
      playtime: 0,
    };
    const renderedComponent = shallow(<RecentGame {...props} />);
    expect(renderedComponent.find(Image)).toHaveLength(1);
  });

  it('should render the text', () => {
    const props = {
      image: '',
      name: 'Test name',
      playtime: 0,
    };
    const renderedComponent = shallow(<RecentGame {...props} />);
    expect(renderedComponent.find(Text)).toHaveLength(1);
  });

  it('should render <Timestamp />', () => {
    const props = {
      image: '',
      name: 'Test name',
      playtime: 0,
    };
    const renderedComponent = shallow(<RecentGame {...props} />);
    expect(renderedComponent.find(Activity)).toHaveLength(1);
  });
});
