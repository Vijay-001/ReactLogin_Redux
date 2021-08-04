import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { startForman }   from '../saga/SagaWatchers';


export  function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const composeArgs = [
    applyMiddleware(sagaMiddleware),
    applyMiddleware(thunkMiddleware),
  ];
  if(window && window.__REDUX_DEVTOOLS_EXTENSION__) {
    composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  const store = createStore(
    rootReducer,
    compose.apply(undefined,composeArgs)
  );

  // sagaMiddleware.run(fakeAuthorize);
 sagaMiddleware.run(startForman);
//   sagaMiddleware.run(logActions);

   // sagaMiddleware.run(watchFetchData);

  return store;
}
