/**
 * Sends messages via mailgun
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import {
  SEND_MESSAGE,
} from './constants';
import {
  messageSent,
  messageSendingError,
} from './actions';

const mailgunApiKey = 'API_KEY';
const mailgunDomainName = 'domain-name.mailgun.org';

/**
 * Mailgun request/response handler
 */
export function* sendMessage(message) {
  const requestURL = `https://api.mailgun.net/v3/${mailgunDomainName}/messages`;
  const requestOptions = {
    method: 'post',
    headers: {
      Authorization: `Basic api:${btoa(mailgunApiKey)}`,
    },
    body: JSON.stringify({
      to: 'arasfeld@gmail.com',
      from: `${message.name} <${message.email}>`,
      subject: `Message from ${message.name}`,
      text: message.text,
    }),
  };

  try {
    // Call our request helper (see 'utils/request')
    yield call(request, requestURL, requestOptions);
    yield put(messageSent());
  } catch (err) {
    yield put(messageSendingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* mailgunData() {
  // Watches for LOAD_ALBUMS aactions and calls sendMessage when one
  // comes in. By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SEND_MESSAGE, sendMessage);
}
