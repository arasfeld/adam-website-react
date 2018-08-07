/**
 * Sends messages via mailgun
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { SEND_MESSAGE } from './constants';
import { messageSent, messageSendingError } from './actions';
import { makeSelectEmail, makeSelectName, makeSelectText } from './selectors';

const emailjsServiceId = 'SERVICE_ID';
const emailjsTemplateId = 'TEMPLATE_ID';
const emailjsUserId = 'USER_ID';

/**
 * Mailgun request/response handler
 */
export function* sendMessage() {
  // Select message values from store
  const name = yield select(makeSelectName());
  const email = yield select(makeSelectEmail());
  const text = yield select(makeSelectText());

  const requestURL = `https://api.emailjs.com/api/v1.0/email/send`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      service_id: emailjsServiceId,
      template_id: emailjsTemplateId,
      user_id: emailjsUserId,
      template_params: {
        from_name: name,
        from_email: email,
        message_text: text,
      },
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
