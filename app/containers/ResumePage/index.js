/*
 * ResumePage
 *
 * List my resume
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ResumeEducation from 'components/ResumeEducation';
import ResumeExperience from 'components/ResumeExperience';
import ResumeHeader from 'components/ResumeHeader';
import ResumeSkills from 'components/ResumeSkills';
import messages from './messages';

class ResumePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Resume</title>
          <meta
            name="description"
            content="Resume page of Adam Rasfeld's website"
          />
        </Helmet>

        <Grid container direction="column" spacing={8}>
          <Grid item>
            <ResumeHeader />
          </Grid>

          <Grid item>
            <Typography variant="headline" gutterBottom>
              <FormattedMessage {...messages.experienceHeader} />
            </Typography>
            <ResumeExperience />
          </Grid>

          <Grid item>
            <Typography variant="headline" gutterBottom>
              <FormattedMessage {...messages.skillsHeader} />
            </Typography>
            <ResumeSkills />
          </Grid>

          <Grid item>
            <Typography variant="headline" gutterBottom>
              <FormattedMessage {...messages.educationHeader} />
            </Typography>
            <ResumeEducation />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ResumePage;
