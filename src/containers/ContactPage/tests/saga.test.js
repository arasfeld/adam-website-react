/**
 * Tests for ContactPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { SEND_MESSAGE } from '../constants';
import { messageSent, messageSendingError } from '../actions';

import mailgunData, { sendMessage } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('sendMessage Saga', () => {
  let sendMessageGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    const fixture = {
      message: {
        email: 'test@test.com',
        name: 'Test name',
        text: 'Test text',
      },
    };
    sendMessageGenerator = sendMessage(fixture);

    const callDescriptor = sendMessageGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the messageSent action if it posts the data successfully', () => {
    const putDescriptor = sendMessageGenerator.next().value;
    expect(putDescriptor).toEqual(put(messageSent()));
  });

  it('should call the messageSendingError action if the post errors', () => {
    const response = new Error('Some error');
    const putDescriptor = sendMessageGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(messageSendingError(response)));
  });
});

describe('mailgunData Saga', () => {
  const mailgunDataSaga = mailgunData();

  it('should start task to watch for SEND_MESSAGE action', () => {
    const takeLatestDescriptor = mailgunDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SEND_MESSAGE, sendMessage));
  });
});
