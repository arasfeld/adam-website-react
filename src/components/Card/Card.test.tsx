import React from 'react';
import { mount } from 'enzyme';

import Card from './Card';

describe('<Card />', () => {
  it('should render a prop', () => {
    const id = 'testId';
    const renderedComponent = mount(<Card id={id}>Text</Card>);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should render its children', () => {
    const children = 'Text';
    const renderedComponent = mount(<Card>{children}</Card>);
    expect(renderedComponent.contains(children)).toBe(true);
  });
});
