/*
 * ResumePage
 *
 * List my resume
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import Card from 'components/Card';
import H2 from 'components/H2';
import H3 from 'components/H3';
import Me from 'images/me.png';

import AngularIcon from './AngularIcon';
import CSharpIcon from './CSharpIcon';
import DotNetCoreIcon from './DotNetCoreIcon';
import HeaderImage from './HeaderImage';
import KrogerIcon from './KrogerIcon';
import MiamiIcon from './MiamiIcon';
import MongoIcon from './MongoIcon';
import Name from './Name';
import ReactIcon from './ReactIcon';
import RovisysIcon from './RovisysIcon';
import SkillsWrapper from './SkillsWrapper';
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

        <div>
          <Card>
            <HeaderImage src={Me} />
            <div>
              <Name />
              <H3>
                <FormattedMessage {...messages.title} />
              </H3>
              <H3>
                <FormattedMessage {...messages.summary} />
              </H3>
            </div>
          </Card>

          <H2>
            <FormattedMessage {...messages.experienceHeader} />
          </H2>
          <div>
            <div>
              <KrogerIcon />
              <H3>
                <FormattedMessage {...messages.krogerTitle} />
              </H3>
              <H3>
                <FormattedMessage {...messages.krogerDates} />
              </H3>
            </div>
            <H3>
              <FormattedMessage {...messages.krogerDescription} />
            </H3>
          </div>
          <div>
            <div>
              <RovisysIcon />
              <H3>
                <FormattedMessage {...messages.rovisysTitle} />
              </H3>
              <H3>
                <FormattedMessage {...messages.rovisysDates} />
              </H3>
            </div>
            <H3>
              <FormattedMessage {...messages.rovisysDescription} />
            </H3>
          </div>

          <div>
            <H2>
              <FormattedMessage {...messages.skillsHeader} />
            </H2>
            <SkillsWrapper>
              <div className="skill">
                <ReactIcon />
                <span>React</span>
              </div>
              <div className="skill">
                <AngularIcon />
                <span>Angular</span>
              </div>
              <div className="skill">
                <CSharpIcon />
                <span>C#</span>
              </div>
              <div className="skill">
                <DotNetCoreIcon />
                <span>.NET Core</span>
              </div>
              <div className="skill">
                <MongoIcon />
                <span>MongoDB</span>
              </div>
            </SkillsWrapper>
          </div>

          <div>
            <div>
              <MiamiIcon />
              <H3>
                <FormattedMessage {...messages.miamiTitle} />
              </H3>
              <H3>
                <FormattedMessage {...messages.miamiDates} />
              </H3>
            </div>
            <H3>
              <FormattedMessage {...messages.miamiDescription} />
            </H3>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage;
