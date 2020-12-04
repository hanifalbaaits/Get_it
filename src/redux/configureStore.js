import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { compact } from 'lodash';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './reducer/rootReducer';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = compact([
  thunk.withExtraArgument(),
  sagaMiddleware,
  __DEV__ ? createLogger() : null
]);

let debuggWrapper = data => data;

const store = createStore(
  rootReducer,
  {},
  debuggWrapper(compose(applyMiddleware(...middlewares)))
);

let sagaRunner;

export default () => {
  // sagaMiddleware.run(rootSaga)
  if (__DEV__ && module.hot && sagaRunner) {
    sagaRunner.cancel();
  }
  sagaRunner = sagaMiddleware.run(rootSaga);
  return store
}

export const persistor = persistStore(store);