import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import EmailField from '../index';
import messages from '../messages';

describe('<EmailField />', () => {
  it('should adopt a className attribute', () => {
    const props = {
      className: 'test',
      onChange: jest.fn(),
    };
    const renderedComponent = shallow(<EmailField {...props} />);
    expect(renderedComponent.hasClass(props.className)).toBe(true);
  });

  it('should render a <FormControl />', () => {
    const props = {
      onChange: jest.fn(),
    };
    const renderedComponent = shallow(<EmailField {...props} />);
    expect(renderedComponent.find(FormControl)).toHaveLength(1);
  });

  it('should render its label', () => {
    const props = {
      onChange: jest.fn(),
    };
    const renderedComponent = shallow(<EmailField {...props} />);
    expect(
      renderedComponent.contains(
        <InputLabel>
          <FormattedMessage {...messages.label} />
        </InputLabel>,
      ),
    ).toBe(true);
  });

  it('should set input value', () => {
    const props = {
      value: 'Test input',
      onChange: jest.fn(),
    };
    const renderedComponent = shallow(<EmailField {...props} />);
    expect(renderedComponent.find(Input).props().value).toEqual(props.value);
  });
});