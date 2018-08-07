/*
 * NameField Messages
 *
 * This contains all the text for the NameField component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.NameField';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Name',
  },
  requiredError: {
    id: `${scope}.error.required`,
    defaultMessage: 'Name is required',
  },
});
