import '@babel/polyfill';
import { get, post } from 'axios';
import { takeLatest } from 'redux-saga/effects';
// import { login } from '../_actions/user.actions';
import { userConstants } from '../_constants';
import { registerSaga, loginSaga, getAlldata, deleteUser,updateuser } from './SagaUserServices';



export default function* watchUserAuthentication() {
    yield takeLatest(userConstants.LOGIN_REQUEST, loginSaga);
    yield takeLatest(userConstants.GETALL_REQUEST, getAlldata);
    yield takeLatest(userConstants.REGISTER_REQUEST, registerSaga);
    yield takeLatest(userConstants.DELETE_REQUEST, deleteUser);
    yield takeLatest(userConstants.UPDATE_REQUEST, updateuser);
}
