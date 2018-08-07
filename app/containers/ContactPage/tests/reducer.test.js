import { fromJS } from 'immutable';

import contactReducer from '../reducer';
import {
  changeEmail,
  changeName,
  changeText,
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
      email: '',
      name: '',
      text: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(contactReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeEmail action correctly', () => {
    const fixture = {
      value: 'test@test.com',
      error: null,
    };
    const expectedResult = state.set('email', fixture);

    expect(contactReducer(state, changeEmail(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeName action correctly', () => {
    const fixture = {
      value: 'Test name',
      error: null,
    };
    const expectedResult = state.set('name', fixture);

    expect(contactReducer(state, changeName(fixture))).toEqual(expectedResult);
  });

  it('should handle the changeText action correctly', () => {
    const fixture = {
      value: 'Test text',
      error: null,
    };
    const expectedResult = state.set('text', fixture);

    expect(contactReducer(state, changeText(fixture))).toEqual(expectedResult);
  });

  it('should handle the sendMessage action correctly', () => {
    const fixture = {
      email: 'test@test.com',
      name: 'Test name',
      text: 'Test text',
    };
    const expectedResult = state.set('loading', true).set('error', false);

    expect(contactReducer(state, sendMessage(fixture))).toEqual(expectedResult);
  });

  it('should handle the messageSent action correctly', () => {
    const expectedResult = state.set('loading', false).set('error', false);

    expect(contactReducer(state, messageSent())).toEqual(expectedResult);
  });

  it('should handle the messageSendingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state.set('error', fixture).set('loading', false);

    expect(contactReducer(state, messageSendingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
