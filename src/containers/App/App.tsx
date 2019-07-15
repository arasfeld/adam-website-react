import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import HomePage from '../HomePage/Loadable';
import MusicPage from '../MusicPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route path="/music" component={MusicPage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
