import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, takeLatest, call, all } from 'redux-saga/effects';
import XMLParser from 'react-xml-parser';
import * as actionType from '../action/actionType';
import * as appAction from '../action/appAction';
import * as authAction from '../action/authAction';
import * as authRepo from '../../datasource/authRepo';

function* sessionCreate(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(authRepo.apiSessionCreate, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let sessionResult = xml.getElementsByTagName("Session_CreateResult");
    if(sessionResult[0].value.includes("0")){
      let sessionToken = sessionResult[0].value.split('|');
      yield put(authAction.sessionSuccess(sessionToken[1]));
    } else {
      yield put(authAction.sessionError(sessionResult[0].value));
    }
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(authAction.sessionError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

function* login(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const sessionToken = yield AsyncStorage.getItem("@SessionToken");
    const res = yield call(authRepo.apiLogin, data.payload, sessionToken);
    let xml = new XMLParser().parseFromString(res.data);
    let loginResult = xml.getElementsByTagName("User_LoginResult");
    if(loginResult[0].value.includes("0")){
      yield put(authAction.loginSuccess(data.payload));
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

function* logout() {
  try {
    yield put(appAction.appStateLoading(true));
    const sessionToken = yield AsyncStorage.getItem("@SessionToken");
    const res = yield call(authRepo.apiLogout, sessionToken);
    let xml = new XMLParser().parseFromString(res.data);
    let logoutResult = xml.getElementsByTagName("Session_LogoutResult");
    yield put(authAction.logoutSuccess(logoutResult));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(authAction.logoutError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

function* register(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(authRepo.apiRegister, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let registerResult = xml.getElementsByTagName("Store_RegisterResult");
    if(registerResult[0].value.includes("00")){
      let payload = {
        email: data.payload.email,
        password: data.payload.password,
        result: registerResult
      }
      yield put(authAction.registerSuccess(payload))
    } else {
      yield put(authAction.registerError(registerResult[0].value))
    }
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(authAction.registerError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

function* activation(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(authRepo.apiActivation, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let activationResult = xml.getElementsByTagName("User_ActivationResult");
    if(activationResult[0].value.split("|")[0] == "0"){
      yield put(authAction.activationSuccess(activationResult));
    } else {
      yield put(authAction.activationError(activationResult));
    }
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(authAction.activationError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

export default function* watchAuth() {
  yield all([
    takeLatest(actionType.AUTH.SESSION_REQUEST, sessionCreate),
    takeLatest(actionType.AUTH.LOGIN_REQUEST, login),
    takeLatest(actionType.AUTH.LOGOUT_REQUEST, logout),
    takeLatest(actionType.AUTH.REGISTER_REQUEST, register),
    takeLatest(actionType.AUTH.ACTIVATION_REQUEST, activation)
  ])
}