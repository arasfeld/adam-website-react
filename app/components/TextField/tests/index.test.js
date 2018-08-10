import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import TextField from '../index';
import messages from '../messages';

describe('<TextField />', () => {
  it('should render a <FormControl />', () => {
    const props = {
      onChange: jest.fn(),
    };
    const renderedComponent = shallow(<TextField {...props} />);
    expect(renderedComponent.find(FormControl)).toHaveLength(1);
  });

  it('should render its label', () => {
    const props = {
      onChange: jest.fn(),
    };
    const renderedComponent = shallow(<TextField {...props} />);
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
    const renderedComponent = shallow(<TextField {...props} />);
    expect(renderedComponent.find(Input).props().value).toEqual(props.value);
  });

  describe('validation', () => {
    it('should error with null value', () => {
      const props = {
        onChange: jest.fn(),
      };
      const renderedComponent = shallow(<TextField {...props} />);
      renderedComponent.setProps({ value: null });
      renderedComponent.find(Input).simulate('blur');
      expect(renderedComponent.state().error).not.toBeNull();
    });

    it('should error with empty value', () => {
      const props = {
        onChange: jest.fn(),
      };
      const renderedComponent = shallow(<TextField {...props} />);
      renderedComponent.setProps({ value: '' });
      renderedComponent.find(Input).simulate('blur');
      expect(renderedComponent.state().error).not.toBeNull();
    });

    it('should accept a non-empty value', () => {
      const props = {
        onChange: jest.fn(),
      };
      const renderedComponent = shallow(<TextField {...props} />);
      renderedComponent.setProps({ value: 'test' });
      renderedComponent.find(Input).simulate('blur');
      expect(renderedComponent.state().error).toBeNull();
    });
  });
});
