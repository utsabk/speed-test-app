import { API_URL, customFetch } from '../../services/networkSpeed';
import { GET_DOWNLOAD_SPEED, GET_UPLOAD_SPEED, RESET_ACTION } from '../types';

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
  return async (dispatch) => {
    return dispatch(setState(RESET_ACTION, {}));
  };
};
