import { put, takeLatest, call, all } from 'redux-saga/effects';
import XMLParser from 'react-xml-parser';
import * as actionType from '../action/actionType';
import * as appAction from '../action/appAction';
import * as productAction from '../action/productAction';
import * as productRepo from '../../datasource/productRepo';

function* productAll(data) {
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(productRepo.apiProductAll, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    let ds = xml.getElementsByTagName("Table");
    yield put(productAction.productSuccess(ds));
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(productAction.productError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

function* bannerAll(data){
  try {
    yield put(appAction.appStateLoading(true));
    const res = yield call(productRepo.apiBannerAll, data.payload);
    let xml = new XMLParser().parseFromString(res.data);
    console.log(xml);
    yield put(appAction.appStateLoading(false));
  } catch (err) {
    yield put(productAction.bannerError(err));
    yield put(appAction.appStateLoading(false));
    yield put(appAction.appStateError(err));
  }
}

export default function* watchProduct() {
  yield all([
    takeLatest(actionType.PRODUCT.ALL_REQUEST, productAll),
    takeLatest(actionType.PRODUCT.BANNER_REQUEST, bannerAll)
  ])
}