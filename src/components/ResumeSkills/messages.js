/*
 * Skills Messages
 *
 * This contains all the text for the Skills component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.Skills';

export default defineMessages({
  professionalHeader: {
    id: `${scope}.professional.header`,
    defaultMessage: 'Professional Skills',
  },
  softHeader: {
    id: `${scope}.soft.header`,
    defaultMessage: 'Soft Skills',
  },
});
