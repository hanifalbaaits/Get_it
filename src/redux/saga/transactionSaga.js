import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, takeLatest, call, all } from 'redux-saga/effects';
import XMLParser from 'react-xml-parser';
import * as actionType from '../action/actionType';
import * as appAction from '../action/appAction';
import * as transactionAction from '../action/transactionAction';
import * as transactionRepo from '../../datasource/transactionRepo';

function* topupType() {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(transactionRepo.apiTopupType);
    let xml = new XMLParser().parseFromString(res.data);
    let table = xml.getElementsByTagName("Table");
    yield put(transactionAction.topupTypeSuccess(table));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(transactionAction.topupTypeError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

function* topupAccount() {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(transactionRepo.apiTopupAccount);
    let xml = new XMLParser().parseFromString(res.data);
    let table = xml.getElementsByTagName("Table");
    yield put(transactionAction.topupAccountSuccess(table));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(transactionAction.topupAccountError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

function* topup(data){
  try {
    yield put(appAction.appStateLoading(true));
    const sessionToken = yield AsyncStorage.getItem("@SessionToken");
    const res = yield call(transactionRepo.apiTopup, data.payload, sessionToken);
    let xml = new XMLParser().parseFromString(res.data);
    let table = xml.getElementsByTagName("Table");
    yield put(transactionAction.topupSuccess(table));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(transactionAction.topupError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

function* payment(data){
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(transactionRepo.apiPayment, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let table = xml.getElementsByTagName("Table");
    yield put(transactionAction.paymentSuccess(table));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(transactionAction.paymentError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

export default function* watchTransaction() {
  yield all([
    takeLatest(actionType.TRANSACTION.TOPUP_TYPE_REQUEST, topupType),
    takeLatest(actionType.TRANSACTION.TOPUP_ACCOUNT_REQUEST, topupAccount),
    takeLatest(actionType.TRANSACTION.TOPUP_REQUEST, topup),
    takeLatest(actionType.TRANSACTION.PAYMENT_REQUEST, payment)
  ])
}