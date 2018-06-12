/*
 * SideNav Messages
 *
 * This contains all the text for the SideNav component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.components.SideNav';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  music: {
    id: `${scope}.music`,
    defaultMessage: 'Music',
  },
  resume: {
    id: `${scope}.resume`,
    defaultMessage: 'Résumé',
  },
});
