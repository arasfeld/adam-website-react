import { fromJS } from 'immutable';

import {
  selectContact,
  makeSelectLoading,
  makeSelectError,
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
