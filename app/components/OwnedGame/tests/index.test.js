import React from 'react';
import { shallow } from 'enzyme';

import OwnedGame from '../index';

describe('<OwnedGame />', () => {
  it('should adopt a className attribute', () => {
    const props = {
      className: 'test',
      image: '',
      name: 'Test Game',
    };
    const renderedComponent = shallow(<OwnedGame {...props} />);
    expect(renderedComponent.hasClass(props.className)).toBe(true);
  });

  it('should render image', () => {
    const props = { image: '', name: 'Test Game' };
    const renderedComponent = shallow(<OwnedGame {...props} />);
    expect(renderedComponent.find('img')).toHaveLength(1);
  });
});
