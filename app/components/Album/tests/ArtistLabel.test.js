import React from 'react';
import { shallow } from 'enzyme';

import ArtistLabel from '../ArtistLabel';

describe('<ArtistLabel />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<ArtistLabel />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<ArtistLabel />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<ArtistLabel id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<ArtistLabel attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
