import { GET_DOWNLOAD_SPEED, GET_UPLOAD_SPEED, RESET_ACTION } from '../types';

const initialState = {
  downloadSpeed: '',
  downloadSpeedList: [],
  uploadSpeed: '',
  uploadSpeedList: [],
};

const networkSpeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOWNLOAD_SPEED:
      return {
        ...state,
        downloadSpeed: action.payload,
        downloadSpeedList: [...state.downloadSpeedList, action.payload],
      };

    case GET_UPLOAD_SPEED:
      return {
        ...state,
        uploadSpeed: action.payload,
        uploadSpeedList: [...state.uploadSpeedList, action.payload],
      };

    case RESET_ACTION:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export default networkSpeedReducer;
