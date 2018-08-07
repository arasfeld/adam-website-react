/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Home',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: `My name is Adam Rasfeld and this is my personal website. As I don't
      really have anything particularly interesting to put out into the
      world, this is more or less a pet project that I started to help
      myself learn React and other technologies that I am interested in.`,
  },
});
