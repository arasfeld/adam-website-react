/**
 * Tests for ContactPage sagas
 */

import { put, takeLatest } from 'redux-saga/effects';

import { SEND_MESSAGE } from '../constants';
import { messageSent, messageSendingError } from '../actions';

import mailgunData, { sendMessage } from '../saga';

const email = 'test@test.com';
const name = 'Test Name';
const text = 'Test text';

/* eslint-disable redux-saga/yield-effects */
describe('sendMessage Saga', () => {
  let sendMessageGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    sendMessageGenerator = sendMessage();

    const selectNameDescriptor = sendMessageGenerator.next().value;
    expect(selectNameDescriptor).toMatchSnapshot();

    const selectEmailDescriptor = sendMessageGenerator.next(name).value;
    expect(selectEmailDescriptor).toMatchSnapshot();

    const selectTextDescriptor = sendMessageGenerator.next(email).value;
    expect(selectTextDescriptor).toMatchSnapshot();

    const callDescriptor = sendMessageGenerator.next(text).value;
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
