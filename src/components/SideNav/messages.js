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
  features: {
    id: `${scope}.features`,
    defaultMessage: 'Features',
  },
});
