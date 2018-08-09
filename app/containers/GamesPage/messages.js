/*
 * GamesPage Messages
 *
 * This contains all the text for the GamesPage component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.containers.GamesPage';

export default defineMessages({
  activity: {
    id: `${scope}.activity`,
    defaultMessage: `
      {hours} hours past 2 weeks
    `,
  },
  owned: {
    id: `${scope}.owned`,
    defaultMessage: 'Owned Games',
  },
  recentlyPlayed: {
    id: `${scope}.recentlyPlayed`,
    defaultMessage: 'Recently Played',
  },
});
