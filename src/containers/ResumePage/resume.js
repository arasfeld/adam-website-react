import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

export default {
  education: [
    {
      start: new Date(2009, 2, 26),
      end: new Date(2014, 11, 1),
      name: 'B.S. Computer Science @ Miami University',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      icon: SchoolIcon,
    },
  ],
  experience: [
    {
      start: new Date(2018, 2, 26),
      end: null,
      name: 'Web Developer @ Kroger Digital',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      icon: WorkIcon,
    },
    {
      start: new Date(2014, 11, 28),
      end: new Date(2018, 1, 12),
      name: 'Software Developer II @ RoviSys',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      icon: WorkIcon,
    },
    {
      start: new Date(2013, 6, 5),
      end: new Date(2014, 0, 12),
      name: 'Engineering Co-op @ RoviSys',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      icon: WorkIcon,
    },
  ],
  skills: {
    professional: [
      {
        name: 'React',
        value: 95,
      },
      {
        name: 'Angular',
        value: 90,
      },
      {
        name: 'C#.NET',
        value: 85,
      },
    ],
    soft: [
      {
        name: 'Problem Solving',
        value: 95,
      },
      {
        name: 'Communication',
        value: 90,
      },
      {
        name: 'Teamwork',
        value: 85,
      },
    ],
  },
};
