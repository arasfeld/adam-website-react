/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import ContactPage from 'containers/ContactPage/Loadable';
import GamesPage from 'containers/GamesPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import MusicPage from 'containers/MusicPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ResumePage from 'containers/ResumePage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Wrapper from './Wrapper';

export default function App() {
  return (
    <Wrapper>
      <Helmet titleTemplate="%s - Adam Rasfeld" defaultTitle="Adam Rasfeld">
        <meta
          name="description"
          content="My personal website written with React.js"
        />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/games" component={GamesPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
    </Wrapper>
  );
}
