import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import Album from '../index';

describe('<Album />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('should adopt a className attribute', () => {
    const props = {
      className: 'test',
      artist: 'Test Artist',
      image: '',
      name: 'Test name',
    };
    const renderedComponent = shallow(<Album {...props} />);
    expect(renderedComponent.hasClass(props.className)).toBe(true);
  });

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
