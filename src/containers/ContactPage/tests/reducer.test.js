import { fromJS } from 'immutable';

import contactReducer from '../reducer';
import {
  sendMessage,
  messageSent,
  messageSendingError,
} from '../actions';

describe('contactReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(contactReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the sendMessage action correctly', () => {
    const fixture = {
      name: 'Test',
      email: 'test@test.com',
      message: 'Test',
    };
    const expectedResult = state
      .set('loading', true)
      .set('error', false);

    expect(contactReducer(state, sendMessage(fixture))).toEqual(expectedResult);
  });

  it('should handle the messageSent action correctly', () => {
    const expectedResult = state
      .set('loading', false);

    expect(contactReducer(state, messageSent())).toEqual(expectedResult);
  });

  it('should handle the messageSendingError action correctly', () => {
    const fixture = [{
      msg: 'Not found',
    }];
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(contactReducer(state, messageSendingError(fixture))).toEqual(expectedResult);
  });
});
