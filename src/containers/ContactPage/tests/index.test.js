/**
 * Test the ContactPage
 */

// import React from 'react';
// import { shallow } from 'enzyme';

// import LoadingIndicator from 'components/LoadingIndicator';
// import { ContactPage, mapDispatchToProps } from '../index';
import { mapDispatchToProps } from '../index';
import { changeEmail, changeName, changeText, sendMessage } from '../actions';

describe('<ContactPage />', () => {
  // Make stuff go here

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
