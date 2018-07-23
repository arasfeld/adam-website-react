import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_TEXT,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from '../constants';

import {
  changeEmail,
  changeName,
  changeText,
  sendMessage,
  messageSent,
  messageSendingError,
} from '../actions';

describe('Contact Actions', () => {
  describe('changeEmail', () => {
    it('should return the correct type and the passed email', () => {
      const fixture = {
        value: '',
        error: null,
      };
      const expectedResult = {
        type: CHANGE_EMAIL,
        email: fixture,
      };

      expect(changeEmail(fixture)).toEqual(expectedResult);
    });
  });

  describe('changeName', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = {
        value: '',
        error: null,
      };
      const expectedResult = {
        type: CHANGE_NAME,
        name: fixture,
      };

      expect(changeName(fixture)).toEqual(expectedResult);
    });
  });

  describe('changeText', () => {
    it('should return the correct type and the passed text', () => {
      const fixture = {
        value: '',
        error: null,
      };
      const expectedResult = {
        type: CHANGE_TEXT,
        text: fixture,
      };

      expect(changeText(fixture)).toEqual(expectedResult);
    });
  });

  describe('sendMessage', () => {
    it('should return the correct type and the message to send', () => {
      const fixture = {
        email: '',
        name: '',
        text: '',
      };
      const expectedResult = {
        type: SEND_MESSAGE,
        message: fixture,
      };

      expect(sendMessage(fixture)).toEqual(expectedResult);
    });
  });

  describe('messageSent', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: SEND_MESSAGE_SUCCESS,
      };

      expect(messageSent()).toEqual(expectedResult);
    });
  });

  describe('messageSendingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: SEND_MESSAGE_ERROR,
        error: fixture,
      };

      expect(messageSendingError(fixture)).toEqual(expectedResult);
    });
  });
});
