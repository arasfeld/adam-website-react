import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import HomePage from '../HomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
