/*
 * Contact Constants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_EMAIL = 'app/Contact/CHANGE_EMAIL';
export const CHANGE_NAME = 'app/Contact/CHANGE_NAME';
export const CHANGE_TEXT = 'app/Contact/CHANGE_TEXT';
export const SEND_MESSAGE = 'app/Contact/SEND_MESSAGE';
export const SEND_MESSAGE_SUCCESS = 'app/Contact/SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_ERROR = 'app/Contact/SEND_MESSAGE_ERROR';