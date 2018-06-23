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
  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,
} from './constants';

/**
 * Send the message, this action starts the request saga
 *
 * @param  {string} name The name of the person sending the message
 * @param  {string} email The email address that the message will come from
 * @param  {string} message The message to send
 *
 * @return {object} An action object with a type of SEND_MESSAGE passing the message
 */
export function sendMessage(name, email, message) {
  return {
    type: SEND_MESSAGE,
    name,
    email,
    message,
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
