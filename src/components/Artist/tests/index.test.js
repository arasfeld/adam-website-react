import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import Artist from '../index';

describe('<Artist />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('should adopt a className attribute', () => {
    const props = {
      className: 'test',
      image: '',
      name: 'Test Artist',
    };
    const renderedComponent = shallow(<Artist {...props} />);
    expect(renderedComponent.hasClass(props.className)).toBe(true);
  });

  it('should render image', () => {
    const props = { image: '', name: 'Test Artist' };
    const renderedComponent = shallow(<Artist {...props} />);
    expect(renderedComponent.find('img')).toHaveLength(1);
  });

  it('should render artist name', () => {
    const props = { image: '', name: 'Test Artist' };
    const renderedComponent = shallow(<Artist {...props} />);
    expect(renderedComponent.text()).toContain(props.name);
  });
});
