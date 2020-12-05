import { all } from 'redux-saga/effects';
import watchAuth from './authSaga';
import watchProfile from './profileSaga';

export default function* rootSaga() {
  yield all([
    watchAuth(),
    watchProfile()
  ])
};