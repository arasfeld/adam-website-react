import React from 'react';
import { shallow } from 'enzyme';

import Album from './Album';

describe('<Album />', () => {
  it('should render image', () => {
    const props = { artist: 'Test Artist', image: '', name: 'Test name' };
    const renderedComponent = shallow(<Album {...props} />);
    expect(renderedComponent.find('img')).toHaveLength(1);
  });

  it('should render album name', () => {
    const props = { artist: 'Test Artist', image: '', name: 'Test name' };
    const renderedComponent = shallow(<Album {...props} />);
    expect(renderedComponent.text()).toContain(props.name);
  });

  it('should render artist name', () => {
    const props = { artist: 'Test Artist', image: '', name: 'Test name' };
    const renderedComponent = shallow(<Album {...props} />);
    expect(renderedComponent.text()).toContain(props.artist);
  });
});
