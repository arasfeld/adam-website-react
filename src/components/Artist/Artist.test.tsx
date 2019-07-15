import React from 'react';
import { shallow } from 'enzyme';

import Artist from './Artist';

describe('<Artist />', () => {
  it('should render image', () => {
    const props = { name: 'Test Artist', image: '' };
    const renderedComponent = shallow(<Artist {...props} />);
    expect(renderedComponent.find('img')).toHaveLength(1);
  });

  it('should render artist name', () => {
    const props = { name: 'Test Artist', image: '' };
    const renderedComponent = shallow(<Artist {...props} />);
    expect(renderedComponent.text()).toContain(props.name);
  });
});
