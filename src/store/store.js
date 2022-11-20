import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import {
  downloadSpeedReducer,
  speedTestReducer,
  uploadSpeedReducer,
} from './reducers/reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['results'],
};

const rootReducer = combineReducers({
  download: persistReducer(persistConfig, downloadSpeedReducer),
  upload: persistReducer(persistConfig, uploadSpeedReducer),
  result: persistReducer(persistConfig, speedTestReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);
