import React from 'react';
import { shallow } from 'enzyme';

import ContactPage from '../index';

describe('<ContactPage />', () => {
  it('should never re-render the component', () => {
    const renderedComponent = shallow(<ContactPage />);
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
