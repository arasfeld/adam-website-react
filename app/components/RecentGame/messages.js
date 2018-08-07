/*
 * RecentGame Messages
 *
 * This contains all the text for the RecentGame component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.RecentGame';

export default defineMessages({
  activity: {
    id: `${scope}.activity`,
    defaultMessage: `
      {hours} hrs on record
    `,
  },
});
