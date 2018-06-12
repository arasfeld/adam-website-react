/**
 * routes.js
 *
 * Define all of the routes
 */
import { defineMessages } from 'react-intl';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HomeIcon from '@material-ui/icons/Home';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import HomePage from 'containers/HomePage/Loadable';
import MusicPage from 'containers/MusicPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ResumePage from 'containers/ResumePage/Loadable';

const scope = 'app.components.SideNav';

export default [
  {
    path: '/',
    exact: true,
    icon: HomeIcon,
    component: HomePage,
    includeInSidenav: true,
    message: defineMessages({
      id: `${scope}.home`,
      defaultMessage: 'Home',
    }),
  },
  {
    path: '/music',
    icon: MusicNoteIcon,
    component: MusicPage,
    includeInSidenav: true,
    message: defineMessages({
      id: `${scope}.music`,
      defaultMessage: 'Music',
    }),
  },
  {
    path: '/resume',
    icon: AssignmentIndIcon,
    component: ResumePage,
    includeInSidenav: true,
    message: defineMessages({
      id: `${scope}.resume`,
      defaultMessage: 'Résumé',
    }),
  },
  {
    path: '',
    component: NotFoundPage,
    includeInSidenav: false,
  },
];
