import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createLogger from 'redux-logger';
import R from 'ramda';

export default function configureStore(reducer, saga) {
  const middleware = [];

  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);

  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE'];

  if (__DEV__) {
    const logger = createLogger({
      predicate: (getState, { type }) => R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
    });
    middleware.push(logger);
  }

  const enhancer = compose(
    applyMiddleware(...middleware),
  );

  const store = createStore(reducer, enhancer);

  sagaMiddleware.run(saga);

  return store;
}
