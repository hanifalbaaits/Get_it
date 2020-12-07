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

export default function* watchHistory() {
  yield all([
    takeLatest(actionType.HISTORY.PERIOD_REQUEST, period)
  ])
}