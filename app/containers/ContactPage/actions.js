/*
 * Contact Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_EMAIL,
  CHANGE_NAME,
  CHANGE_TEXT,
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from './constants';

/**
 * Changes the message input field of the form
 *
 * @param {object} email The new text of the message input field
 *
 * @return {object}    An action object with a type of CHANGE_MESSAGE
 */
export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    email,
  };
}

/**
 * Changes the message input field of the form
 *
 * @param {object} name The new text of the message input field
 *
 * @return {object}    An action object with a type of CHANGE_MESSAGE
 */
export function changeName(name) {
  return {
    type: CHANGE_NAME,
    name,
  };
}

/**
 * Changes the message input field of the form
 *
 * @param {object} text The new text of the message input field
 *
 * @return {object}    An action object with a type of CHANGE_MESSAGE
 */
export function changeText(text) {
  return {
    type: CHANGE_TEXT,
    text,
  };
}

/**
 * Send the message, this action starts the request saga
 *
 * @return {object} An action object with a type of SEND_MESSAGE
 */
export function sendMessage() {
  return {
    type: SEND_MESSAGE,
  };
}

/**
 * Dispatched when the message is sent by the request saga
 *
 * @return {object}      An action object with a type of SEND_MESSAGE_SUCCESS
 */
export function messageSent() {
  return {
    type: SEND_MESSAGE_SUCCESS,
  };
}

/**
 * Dispatched when sending the message fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of SEND_MESSAGE_ERROR passing the error
 */
export function messageSendingError(error) {
  return {
    type: SEND_MESSAGE_ERROR,
    error,
  };
}
