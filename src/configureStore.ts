/**
 * Create the store with dynamic reducers
 */
import { createStore, applyMiddleware, compose, Middleware, Store } from 'redux';
import { default as createSagaMiddleware, Saga, Task } from 'redux-saga';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export interface IStore<T> extends Store<T> {
  runSaga<S extends Saga>(saga: S, ...args: Parameters<S>): Task;
}

export default function configureStore<T>(initialState: object = {}): IStore<T> {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares: Middleware[] = [
    sagaMiddleware,
  ];

  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, indent */
  const composeEnhancers =
    typeof window === 'object' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;
  /* eslint-enable */

  const store: IStore<T> = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  // Extensions
  store.runSaga = sagaMiddleware.run;

  return store;
}
