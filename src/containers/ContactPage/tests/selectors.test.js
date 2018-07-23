import { fromJS } from 'immutable';

import {
  selectContact,
  makeSelectLoading,
  makeSelectError,
  makeSelectEmail,
  makeSelectName,
  makeSelectText,
} from '../selectors';

describe('selectContact', () => {
  it('should select the contact state', () => {
    const contactState = fromJS({});
    const mockedState = fromJS({
      contact: contactState,
    });
    expect(selectContact(mockedState)).toEqual(contactState);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      contact: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      contact: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectEmail', () => {
  const emailSelector = makeSelectEmail();
  it('should select the email', () => {
    const email = fromJS({
      value: '',
      error: null,
    });
    const mockedState = fromJS({
      contact: {
        email,
      },
    });
    expect(emailSelector(mockedState)).toEqual(email);
  });
});

describe('makeSelectName', () => {
  const nameSelector = makeSelectName();
  it('should select the name', () => {
    const name = fromJS({
      value: '',
      error: null,
    });
    const mockedState = fromJS({
      contact: {
        name,
      },
    });
    expect(nameSelector(mockedState)).toEqual(name);
  });
});

describe('makeSelectText', () => {
  const textSelector = makeSelectText();
  it('should select the text', () => {
    const text = fromJS({
      value: '',
      error: null,
    });
    const mockedState = fromJS({
      contact: {
        text,
      },
    });
    expect(textSelector(mockedState)).toEqual(text);
  });
});
