/*
 * ResumePage
 *
 * List my resume
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Timeline from 'components/Timeline';
import ResumeHeader from 'components/ResumeHeader';
import ResumeSkills from 'components/ResumeSkills';
import messages from './messages';
import resume from './resume';

const styles = (theme) => ({
  card: {
    margin: theme.spacing.unit,
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
  },
});

function ResumePage(props) {
  const { classes } = props;

  return (
    <div>
      <Helmet>
        <title>Résumé</title>
        <meta name="description" content="Résumé page of Adam Rasfeld's website" />
      </Helmet>

      <Card className={classes.card} color="primary">
        <CardContent>
          <ResumeHeader />
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" gutterBottom>
            <FormattedMessage {...messages.experienceHeader} />
          </Typography>
          <Timeline events={resume.experience} />
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <ResumeSkills professional={resume.skills.professional} soft={resume.skills.soft} />
        </CardContent>
      </Card>

      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" gutterBottom>
            <FormattedMessage {...messages.educationHeader} />
          </Typography>
          <Timeline events={resume.education} />
        </CardContent>
      </Card>
    </div>
  );
}

ResumePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResumePage);
