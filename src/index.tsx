import React from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from 'redux-react-hook';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './configureStore';
import rootSaga from './sagas';
import App from './containers/App';
import './index.css';

import * as serviceWorker from './serviceWorker';

const store = configureStore({});
store.runSaga(rootSaga);

ReactDOM.render(
  (
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreContext.Provider>
  ),
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
