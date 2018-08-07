/*
 * ContactForm Messages
 *
 * This contains all the text for the ContactForm component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.ContactForm';

export default defineMessages({
  email: {
    id: `${scope}.email`,
    defaultMessage: 'Email',
  },
  message: {
    id: `${scope}.message`,
    defaultMessage: 'Message',
  },
  name: {
    id: `${scope}.name`,
    defaultMessage: 'Name',
  },
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Send',
  },
});
