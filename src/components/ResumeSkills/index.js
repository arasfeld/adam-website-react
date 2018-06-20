import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Meter from 'components/Meter';
import messages from './messages';

function ResumeSkills({ professional, soft }) {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12} md={6}>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...messages.professionalHeader} />
        </Typography>
        {professional.map((skill) => (
          <Meter
            key={`professional-skill-${skill.name}`}
            name={skill.name}
            value={skill.value}
          />
        ))}
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="headline" gutterBottom>
          <FormattedMessage {...messages.softHeader} />
        </Typography>
        {soft.map((skill) => (
          <Meter
            key={`soft-skill-${skill.name}`}
            name={skill.name}
            value={skill.value}
          />
        ))}
      </Grid>
    </Grid>
  );
}

ResumeSkills.propTypes = {
  professional: PropTypes.array,
  soft: PropTypes.array,
};

export default ResumeSkills;
