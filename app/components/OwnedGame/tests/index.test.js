import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import OwnedGame from '../index';

describe('<OwnedGame />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

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
