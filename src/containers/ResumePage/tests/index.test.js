import React from 'react';
import { shallow } from 'enzyme';

import ResumeHeader from 'components/ResumeHeader';
import ResumePage from '../index';

describe('<ResumePage />', () => {
  it('should render a ResumeHeader', () => {
    const renderedComponent = shallow(
      <ResumePage />
    );
    expect(renderedComponent.find(ResumeHeader).length).toEqual(1);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(
      <ResumePage />
    );
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
