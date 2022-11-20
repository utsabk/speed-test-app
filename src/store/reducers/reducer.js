import {
  ADD_TO_HISTORY_LIST,
  CHANGE_DOWNLOAD_STATE,
  CHANGE_UPLOAD_STATE,
  GET_DOWNLOAD_SPEED,
  GET_UPLOAD_SPEED,
  REMOVE_FROM_HISTORY_LIST,
  RESET_ACTION,
} from '../types';

const initialStateDownload = {
  speed: '',
  speedList: [],
  active: false,
};

const initialStateUpload = {
  speed: '',
  speedList: [],
  active: false,
};

const initialSpeedTestList = {
  results: [],
};

export const downloadSpeedReducer = (state = initialStateDownload, action) => {
  switch (action.type) {
    case GET_DOWNLOAD_SPEED:
      return {
        ...state,
        speed: action.payload,
        speedList: [...state.speedList, action.payload],
      };
    case RESET_ACTION:
      return {
        ...initialStateDownload,
      };

    case CHANGE_DOWNLOAD_STATE:
      return {
        ...state,
        active: !state.active,
      };

    default:
      return state;
  }
};

export const uploadSpeedReducer = (state = initialStateUpload, action) => {
  switch (action.type) {
    case GET_UPLOAD_SPEED:
      return {
        ...state,
        speed: action.payload,
        speedList: [...state.speedList, action.payload],
      };

    case RESET_ACTION:
      return {
        ...initialStateUpload,
      };

    case CHANGE_UPLOAD_STATE:
      return {
        ...state,
        active: !state.active,
      };

    default:
      return state;
  }
};

export const speedTestReducer = (state = initialSpeedTestList, action) => {
  switch (action.type) {
    case ADD_TO_HISTORY_LIST:
      return {
        ...state,
        results: [...state.results, action.payload],
      };

    case REMOVE_FROM_HISTORY_LIST:
      return {
        ...state,
        results: state.results.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
};
