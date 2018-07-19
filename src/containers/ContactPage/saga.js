/**
 * Sends messages via mailgun
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { SEND_MESSAGE } from './constants';
import { messageSent, messageSendingError } from './actions';

const emailjsServiceId = 'SERVICE_ID';
const emailjsTemplateId = 'TEMPLATE_ID';
const emailjsUserId = 'USER_ID';

/**
 * Mailgun request/response handler
 */
export function* sendMessage({ message }) {
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
        from_name: message.name,
        from_email: message.email,
        message_text: message.text,
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
