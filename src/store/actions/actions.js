import { API_URL, customFetch } from '../../services/networkSpeed';
import {
  ADD_TO_HISTORY_LIST,
  CHANGE_DOWNLOAD_STATE,
  CHANGE_UPLOAD_STATE,
  GET_DOWNLOAD_SPEED,
  GET_UPLOAD_SPEED,
  REMOVE_FROM_HISTORY_LIST,
  RESET_ACTION,
} from '../types';

export const setState = (action, result) => {
  return {
    type: action,
    payload: result,
  };
};

export const getDownloadSpeed = () => {
  return async (dispatch) => {
    try {
      const results = await customFetch(`${API_URL}/download`);

      await dispatch(setState(GET_DOWNLOAD_SPEED, results));

      return results || [];
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const getUploadSpeed = () => {
  return async (dispatch) => {
    try {
      const results = await customFetch(`${API_URL}/upload`);
      await dispatch(setState(GET_UPLOAD_SPEED, results));

      return results || [];
    } catch (err) {
      throw new Error(err);
    }
  };
};

export const resetStore = () => {
  return (dispatch) => {
    return dispatch(setState(RESET_ACTION, {}));
  };
};

export const changeDownloadState = () => {
  return (dispatch) => {
    return dispatch(setState(CHANGE_DOWNLOAD_STATE, {}));
  };
};

export const changeUploadState = () => {
  return (dispatch) => {
    return dispatch(setState(CHANGE_UPLOAD_STATE, {}));
  };
};

export const addToHistoryList = (speed) => {
  return (dispatch) => {
    return dispatch(setState(ADD_TO_HISTORY_LIST, speed));
  };
};

export const removeFromHistoryList = (speed) => {
  return (dispatch) => {
    return dispatch(setState(REMOVE_FROM_HISTORY_LIST, speed));
  };
};
