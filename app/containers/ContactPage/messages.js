/*
 * ContactPage Messages
 *
 * This contains all the text for the ContactPage component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.containers.ContactPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Contact Me',
  },
  send: {
    id: `${scope}.send`,
    defaultMessage: 'Send',
  },
});
