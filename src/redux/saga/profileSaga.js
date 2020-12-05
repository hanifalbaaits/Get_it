import { put, takeLatest, call, all } from 'redux-saga/effects';
import XMLParser from 'react-xml-parser';
import * as actionType from '../action/actionType';
import * as appAction from '../action/appAction';
import * as profileAction from '../action/profileAction';
import * as profileRepo from '../../datasource/profileRepo';

function* profileInfo(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(profileRepo.apiProfileInfo, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let table = xml.getElementsByTagName("Table");
    yield put(profileAction.infoSuccess(table[0].children));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(profileAction.infoError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

function* profileBalance(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(profileRepo.apiProfileBalance, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let balance = xml.getElementsByTagName("Balance_User_selectResult");
    yield put(profileAction.balanceSuccess(balance[0].value));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(profileAction.balanceError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

export default function* watchProfile() {
  yield all([
    takeLatest(actionType.PROFILE.INFO_REQUEST, profileInfo),
    takeLatest(actionType.PROFILE.BALANCE_REQUEST, profileBalance)
  ])
}