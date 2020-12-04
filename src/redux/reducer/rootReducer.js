import { persistCombineReducers, autoMergeLevel2 } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppReducer from './appReducer';
import AuthReducer from './authReducer';

const persistConfig = {
  timeout: 0,
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['app'],
  stateReconciler: autoMergeLevel2,
}

const combinedReducer = persistCombineReducers(persistConfig, {
  app: AppReducer,
  auth: AuthReducer,
})

export default function rootReducer(state, action) {
  return combinedReducer(state, action);
}