/*
 * TextField Messages
 *
 * This contains all the text for the TextField component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.TextField';

export default defineMessages({
  label: {
    id: `${scope}.label`,
    defaultMessage: 'Text',
  },
  requiredError: {
    id: `${scope}.error.required`,
    defaultMessage: 'Text is required',
  },
});
