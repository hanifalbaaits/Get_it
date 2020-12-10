import { put, takeLatest, call, all } from 'redux-saga/effects';
import XMLParser from 'react-xml-parser';
import * as actionType from '../action/actionType';
import * as appAction from '../action/appAction';
import * as historyAction from '../action/historyAction';
import * as historyRepo from '../../datasource/historyRepo';

function* period(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(historyRepo.apiHistoryPeriod, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let ds = xml.getElementsByTagName("Table");
    yield put(historyAction.periodSuccess(ds));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(historyAction.periodError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

function* lastTransaction(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(historyRepo.apiHistoryLastTransaction, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let ds = xml.getElementsByTagName("Table");
    yield put(historyAction.lastTransactionSuccess(ds));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(historyAction.lastTransactionError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

function* lastTopup(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(historyRepo.apiHistoryLastTopup, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let ds = xml.getElementsByTagName("Table");
    yield put(historyAction.lastTopupSuccess(ds));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(historyAction.lastTopupError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

export default function* watchHistory() {
  yield all([
    takeLatest(actionType.HISTORY.PERIOD_REQUEST, period),
    takeLatest(actionType.HISTORY.LAST_TRANSACTION_REQUEST, lastTransaction),
    takeLatest(actionType.HISTORY.LAST_TOPUP_REQUEST, lastTopup)
  ])
}