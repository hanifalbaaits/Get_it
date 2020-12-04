import { put, takeLatest, call, all } from 'redux-saga/effects';
import XMLParser from 'react-xml-parser';
import * as actionType from '../action/actionType';
import * as appAction from '../action/appAction';
import * as authAction from '../action/authAction';
import * as authRepo from '../../datasource/authRepo';

function* login(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(authRepo.apiLogin, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let loginResult = xml.getElementsByTagName("User_LoginResult");
    if(loginResult[0].value.includes("0")){
      yield put(authAction.loginSuccess(res.data));
    } else {
      yield put(authAction.loginError(loginResult[0].value));
    }
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(authAction.loginError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

export default function* watchAuth() {
  yield all([
    takeLatest(actionType.AUTH.LOGIN_REQUEST, login)
  ])
}