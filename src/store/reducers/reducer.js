import {
  CHNAGE_DOWNLOAD_STATE,
  CHNAGE_UPLOAD_STATE,
  GET_DOWNLOAD_SPEED,
  GET_UPLOAD_SPEED,
  RESET_ACTION,
} from '../types';

const initialStateDownload = {
  speed: '',
  speedList: [],
  active: true,
};

const initialStateUpload = {
  speed: '',
  speedList: [],
  active: false,
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

    case CHNAGE_DOWNLOAD_STATE:
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

    case CHNAGE_UPLOAD_STATE:
      return {
        ...state,
        active: !state.active,
      };

    default:
      return state;
  }
};
