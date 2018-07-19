/*
 * EmailField Messages
 *
 * This contains all the text for the EmailField component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.EmailField';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Email',
  },
  invalidError: {
    id: `${scope}.error.invalid`,
    defaultMessage: 'Invalid email address',
  },
  requiredError: {
    id: `${scope}.error.required`,
    defaultMessage: 'Email is required',
  },
});
