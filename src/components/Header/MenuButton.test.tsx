import React from 'react';
import { shallow } from 'enzyme';

import MenuButton from './MenuButton';

describe('<MenuButton />', () => {
  it('should render a button', () => {
    const renderedComponent = shallow(<MenuButton onClick={() => ({})} />);
    expect(renderedComponent.find('button')).toHaveLength(1);
  });

  it('should handle click events', () => {
    const onClick = jest.fn();
    const renderedComponent = shallow(<MenuButton onClick={onClick} />);
    renderedComponent.find('button').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
