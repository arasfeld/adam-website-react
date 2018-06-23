/*
 * ResumePage Messages
 *
 * This contains all the text for the ResumePage component.
 */
import { defineMessages } from 'react-intl';

const scope = 'app.containers.ResumePage';

export default defineMessages({
  skillsHeader: {
    id: `${scope}.skills.header`,
    defaultMessage: 'Professional Skills',
  },
  educationHeader: {
    id: `${scope}.education.header`,
    defaultMessage: 'Education',
  },
  experienceHeader: {
    id: `${scope}.experience.header`,
    defaultMessage: 'Experience',
  },
});
