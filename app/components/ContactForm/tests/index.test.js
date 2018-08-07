import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import EmailField from 'components/EmailField';
import NameField from 'components/NameField';
import TextField from 'components/TextField';
import ContactForm from '../index';

describe('<ContactForm />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('should render a <NameField />', () => {
    const props = {
      onSubmit: jest.fn(),
      onChangeEmail: jest.fn(),
      onChangeName: jest.fn(),
      onChangeText: jest.fn(),
    };
    const renderedComponent = shallow(<ContactForm {...props} />);
    expect(renderedComponent.find(NameField)).toHaveLength(1);
  });

  it('should render an <EmailField />', () => {
    const props = {
      onSubmit: jest.fn(),
      onChangeEmail: jest.fn(),
      onChangeName: jest.fn(),
      onChangeText: jest.fn(),
    };
    const renderedComponent = shallow(<ContactForm {...props} />);
    expect(renderedComponent.find(EmailField)).toHaveLength(1);
  });

  it('should render a <TextField />', () => {
    const props = {
      onSubmit: jest.fn(),
      onChangeEmail: jest.fn(),
      onChangeName: jest.fn(),
      onChangeText: jest.fn(),
    };
    const renderedComponent = shallow(<ContactForm {...props} />);
    expect(renderedComponent.find(TextField)).toHaveLength(1);
  });

  it('should render the submit button', () => {
    const props = {
      onSubmit: jest.fn(),
      onChangeEmail: jest.fn(),
      onChangeName: jest.fn(),
      onChangeText: jest.fn(),
    };
    const renderedComponent = shallow(<ContactForm {...props} />);
    expect(renderedComponent.find('.contact-form-submit')).toHaveLength(1);
  });

  it('should call onSubmit when submit button is clicked', () => {
    const props = {
      onSubmit: jest.fn(),
      onChangeEmail: jest.fn(),
      onChangeName: jest.fn(),
      onChangeText: jest.fn(),
    };
    const renderedComponent = shallow(<ContactForm {...props} />);
    renderedComponent.find('.contact-form-submit').simulate('click');
    expect(props.onSubmit).toHaveBeenCalled();
  });
});
