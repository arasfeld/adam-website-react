import React from 'react';
import { shallow } from 'enzyme';

import Overlay from '../Overlay';

describe('<Overlay />', () => {
  it('should render an <div> tag', () => {
    const renderedComponent = shallow(<Overlay />);
    expect(renderedComponent.type()).toEqual('div');
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<Overlay />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<Overlay id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<Overlay attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
