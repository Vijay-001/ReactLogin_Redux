import { fork } from 'redux-saga/effects';
import watchUserAuthentication from './watchUserAuthentication';

export  function* startForman() {
  yield fork(watchUserAuthentication);
}
