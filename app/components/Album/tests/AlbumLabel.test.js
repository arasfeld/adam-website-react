import React from 'react';
import { shallow } from 'enzyme';

import AlbumLabel from '../AlbumLabel';

describe('<AlbumLabel />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<AlbumLabel />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<AlbumLabel />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<AlbumLabel id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<AlbumLabel attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
