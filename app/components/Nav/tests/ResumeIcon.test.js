import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import ResumeIcon from '../ResumeIcon';

describe('<ResumeIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<ResumeIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
