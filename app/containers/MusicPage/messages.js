/*
 * MusicPage Messages
 *
 * This contains all the text for the MusicPage container.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.containers.MusicPage';

export default defineMessages({
  albums: {
    id: `${scope}.albums`,
    defaultMessage: 'Top Albums',
  },
  artists: {
    id: `${scope}.artists`,
    defaultMessage: 'Top Artists',
  },
  tracks: {
    id: `${scope}.tracks`,
    defaultMessage: 'Recent Tracks',
  },
});
