import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';

import { downloadSpeedReducer, uploadSpeedReducer } from './reducers/reducer';

const rootReducer = combineReducers({
  download: downloadSpeedReducer,
  upload: uploadSpeedReducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
