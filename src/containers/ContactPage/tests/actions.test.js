import {
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from '../constants';

import { sendMessage, messageSent, messageSendingError } from '../actions';

describe('Contact Actions', () => {
  describe('sendMessage', () => {
    it('should return the correct type and the passed message', () => {
      const name = 'Test';
      const email = 'test@test.com';
      const message = 'Test';

      const expectedResult = {
        type: SEND_MESSAGE,
        name,
        email,
        message,
      };

      expect(sendMessage(name, email, message)).toEqual(expectedResult);
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
