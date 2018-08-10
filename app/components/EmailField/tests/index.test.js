import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import EmailField from '../index';
import messages from '../messages';

describe('<EmailField />', () => {
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

  describe('validation', () => {
    it('should error with null value', () => {
      const props = {
        onChange: jest.fn(),
      };
      const renderedComponent = shallow(<EmailField {...props} />);
      renderedComponent.setProps({ value: null });
      renderedComponent.find(Input).simulate('blur');
      expect(renderedComponent.state().error).not.toBeNull();
    });

    it('should error with empty value', () => {
      const props = {
        onChange: jest.fn(),
      };
      const renderedComponent = shallow(<EmailField {...props} />);
      renderedComponent.setProps({ value: '' });
      renderedComponent.find(Input).simulate('blur');
      expect(renderedComponent.state().error).not.toBeNull();
    });

    it('should error with non-email value', () => {
      const props = {
        onChange: jest.fn(),
      };
      const renderedComponent = shallow(<EmailField {...props} />);
      renderedComponent.setProps({ value: 'test' });
      renderedComponent.find(Input).simulate('blur');
      expect(renderedComponent.state().error).not.toBeNull();
    });

    it('should accept a valid email', () => {
      const props = {
        onChange: jest.fn(),
      };
      const renderedComponent = shallow(<EmailField {...props} />);
      renderedComponent.setProps({ value: 'test@test.com' });
      renderedComponent.find(Input).simulate('blur');
      expect(renderedComponent.state().error).toBeNull();
    });
  });
});
