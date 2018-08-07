/*
 * RecentGameList Messages
 *
 * This contains all the text for the RecentGameList component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.RecentGameList';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Recently Played',
  },
  activity: {
    id: `${scope}.activity`,
    defaultMessage: `
      {hours} hours past 2 weeks
    `,
  },
});
