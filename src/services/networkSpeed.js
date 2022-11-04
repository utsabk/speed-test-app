import Constants from 'expo-constants';

const API_IP = Constants.manifest.hostUri.split(':')[0];

const API_PORT = 8000;

export const API_URL = `http://${API_IP}:${API_PORT}`;

export const customFetch = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (err) {
    throw new Error('Error fetching resources from remote');
  }
};
