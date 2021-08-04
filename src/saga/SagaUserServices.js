
import { put, call } from 'redux-saga/effects';
import {userService } from '../_services';
import { userConstants, alertConstants } from '../_constants';
import { history } from '../_helpers';

export function* registerSaga(user) {
  try {
    const response = yield call(userService.register, user);
    yield put({ type: userConstants.REGISTER_SUCCESS, response });
        console.log("registerSaga response",JSON.stringify(response));
    history.push('/Login')
  } catch(error) {
     put({ type: userConstants.REGISTER_FAILURE, error });
  }
}

export function* loginSaga(user) {
  try {
    const response = yield call(userService.login, user);
    console.log("loginsaga response",JSON.stringify(response));
      yield put({ type: userConstants.LOGIN_SUCCESS, response });
      history.push('/Homepage')
  } catch(error) {
    yield put({ type: userConstants.LOGIN_FAILURE, error })
  }
}


export function* getAlldata(user) {
  try {
    const response = yield call(userService.getAll,user);
    yield put({ type: userConstants.GETALL_SUCCESS, response });
  } catch(error) {
    yield put({ type: userConstants.GETALL_FAILURE, error })
  }
}


export function* deleteUser(id) {
  try {
    const response = yield call(userService.delete,id.id);
    yield put({ type: userConstants.DELETE_SUCCESS, id });
    history.push('/Homepage')
    } catch(error) {
    yield put({ type: userConstants.DELETE_FAILURE, error })
  }
}


export function* updateuser(user) {
  try {
    console.log("called fcntion api");
    const response = yield call(userService.update,user.user);
    yield put({ type: userConstants.UPDATE_SUCCESS, response });
    } catch(error) {
    yield put({ type: userConstants.UPDATE_FAILURE, error })
  }
}
