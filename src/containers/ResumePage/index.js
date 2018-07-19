/*
 * ResumePage
 *
 * List my resume
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Timeline from 'components/Timeline';
import ResumeHeader from 'components/ResumeHeader';
import ResumeSkills from 'components/ResumeSkills';
import messages from './messages';
import resume from './resume';

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
            content="Résumé page of Adam Rasfeld's website"
          />
        </Helmet>

        <Grid container direction="column" spacing={8}>
          <Grid item>
            <Card>
              <CardContent>
                <ResumeHeader />
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card>
              <CardContent>
                <Typography variant="headline" gutterBottom>
                  <FormattedMessage {...messages.experienceHeader} />
                </Typography>
                <Timeline events={resume.experience} />
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card>
              <CardContent>
                <ResumeSkills
                  professional={resume.skills.professional}
                  soft={resume.skills.soft}
                />
              </CardContent>
            </Card>
          </Grid>

          <Grid item>
            <Card>
              <CardContent>
                <Typography variant="headline" gutterBottom>
                  <FormattedMessage {...messages.educationHeader} />
                </Typography>
                <Timeline events={resume.education} />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ResumePage;
