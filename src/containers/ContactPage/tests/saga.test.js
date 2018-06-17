import { put, takeLatest } from 'redux-saga/effects';

import { SEND_MESSAGE } from '../constants';
import { messageSent, messageSendingError } from '../actions';

import mailGunData, { sendMesssage } from '../saga';

describe('sendMessage Saga', () => {
  let sendMessageGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    sendMessageGenerator = sendMesssage();

    const callDescriptor = sendMessageGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the messageSent action if it sends the data successfully', () => {
    const putDescriptor = sendMessageGenerator.next().value;
    expect(putDescriptor).toEqual(put(messageSent()));
  });

  it('should dispatch the messageSendingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = sendMessageGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(messageSendingError(response)));
  });
});

describe('mailGunData Saga', () => {
  const mailGunDataSaga = mailGunData();

  it('should start task to watch for SEND_MESSAGE actions', () => {
    const takeLatestSendMessageDescriptor = mailGunDataSaga.next().value;
    expect(takeLatestSendMessageDescriptor).toEqual(takeLatest(SEND_MESSAGE, sendMesssage));
  });
});
