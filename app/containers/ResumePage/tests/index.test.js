import React from 'react';
import { shallow } from 'enzyme';

import ResumePage from '../index';

describe('<ResumePage />', () => {
  it('should never re-render the component', () => {
    const renderedComponent = shallow(<ResumePage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
