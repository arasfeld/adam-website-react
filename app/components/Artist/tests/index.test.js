import React from 'react';
import { render } from 'enzyme';

import Artist from '../index';

describe('<Artist />', () => {
  it('should render image', () => {
    const props = { image: '', name: 'Test Artist' };
    const renderedComponent = render(<Artist {...props} />);
    expect(renderedComponent.find('img')).toHaveLength(1);
  });

  it('should render artist name', () => {
    const props = { image: '', name: 'Test Artist' };
    const renderedComponent = render(<Artist {...props} />);
    expect(renderedComponent.text()).toContain(props.name);
  });
});
