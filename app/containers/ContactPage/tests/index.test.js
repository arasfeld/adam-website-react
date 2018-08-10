/**
 * Test the ContactPage
 */

import React from 'react';
import { shallow } from 'enzyme';

// import LoadingIndicator from 'components/LoadingIndicator';
import EmailField from 'components/EmailField';
import NameField from 'components/NameField';
import TextField from 'components/TextField';
import { ContactPage, mapDispatchToProps } from '../index';
import { changeEmail, changeName, changeText, sendMessage } from '../actions';

describe('<ContactPage />', () => {
  it('should render a <NameField />', () => {
    const props = {
      onSubmit: jest.fn(),
      onChangeEmail: jest.fn(),
      onChangeName: jest.fn(),
      onChangeText: jest.fn(),
    };
    const renderedComponent = shallow(<ContactPage {...props} />);
    expect(renderedComponent.find(NameField)).toHaveLength(1);
  });

  it('should render an <EmailField />', () => {
    const props = {
      onSubmit: jest.fn(),
      onChangeEmail: jest.fn(),
      onChangeName: jest.fn(),
      onChangeText: jest.fn(),
    };
    const renderedComponent = shallow(<ContactPage {...props} />);
    expect(renderedComponent.find(EmailField)).toHaveLength(1);
  });

  it('should render a <TextField />', () => {
    const props = {
      onSubmit: jest.fn(),
      onChangeEmail: jest.fn(),
      onChangeName: jest.fn(),
      onChangeText: jest.fn(),
    };
    const renderedComponent = shallow(<ContactPage {...props} />);
    expect(renderedComponent.find(TextField)).toHaveLength(1);
  });

  it('should render the submit button', () => {
    const props = {
      onSubmit: jest.fn(),
      onChangeEmail: jest.fn(),
      onChangeName: jest.fn(),
      onChangeText: jest.fn(),
    };
    const renderedComponent = shallow(<ContactPage {...props} />);
    expect(renderedComponent.find('.contact-form-submit')).toHaveLength(1);
  });

  it('should call onSubmit when submit button is clicked', () => {
    const props = {
      onSubmit: jest.fn(),
      onChangeEmail: jest.fn(),
      onChangeName: jest.fn(),
      onChangeText: jest.fn(),
    };
    const renderedComponent = shallow(<ContactPage {...props} />);
    renderedComponent.find('.contact-form-submit').simulate('click');
    expect(props.onSubmit).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeEmail', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeEmail).toBeDefined();
      });

      it('should dispatch changeEmail when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onChangeEmail();
        expect(dispatch).toHaveBeenCalledWith(changeEmail());
      });
    });

    describe('onChangeName', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeName).toBeDefined();
      });

      it('should dispatch changeName when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onChangeName();
        expect(dispatch).toHaveBeenCalledWith(changeName());
      });
    });

    describe('onChangeText', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeText).toBeDefined();
      });

      it('should dispatch changeText when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onChangeText();
        expect(dispatch).toHaveBeenCalledWith(changeText());
      });
    });

    describe('onSubmit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmit).toBeDefined();
      });

      it('should dispatch sendMessage when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmit();
        expect(dispatch).toHaveBeenCalledWith(sendMessage());
      });
    });
  });
});
