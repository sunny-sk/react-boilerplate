import axios from 'axios';
import { TOAST_CONFIG, USER_LOCALSTORAE_KEY } from 'constant';
import { toast } from 'react-toastify';
import { BASE_URL } from 'utils/url';

import { handleError } from '../utils/helper';

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 4500;
axios.defaults.headers['Content-type'] = 'application/json';

// get method
/**
 * @param {String} URL
 * @param {Object} options
 * @param {Boolean} options.auth
 * @returns Prmoise
 */
export const GET = async (URL, options = {}) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    if (options.auth) {
      const token = JSON.parse(
        localStorage.getItem(USER_LOCALSTORAE_KEY)
      ).token;
      headers['Authorization'] = token;
    }
    const { data } = await axios.get(URL, {
      ...headers,
    });
    return {
      data: data,
      error: null,
    };
  } catch (error) {
    toast.error(handleError(error), { ...TOAST_CONFIG });
    return {
      error: handleError(error),
      data: null,
    };
  }
};
// post method
/**
 * @param {String} URL
 * @param {Object} options
 * @param {Boolean} options.auth
 * @param {Object} options.headers
 * @param {Object} options.payload
 * @returns Promise
 */
export const POST = async (
  URL,
  options = {
    auth: false,
    headers: {},
    payload: {},
  }
) => {
  try {
    let headers = {
      'Content-Type': 'application/json',
    };
    if (options.headers) {
      headers = { ...headers, ...options.headers };
    }

    if (options.auth) {
      const token = JSON.parse(
        localStorage.getItem(USER_LOCALSTORAE_KEY)
      ).token;
      headers['Authorization'] = token;
    }

    const { data } = await axios.post(
      URL,
      { ...options.payload },
      {
        ...headers,
      }
    );

    if (data.success) {
      return {
        data,
        error: null,
      };
    } else {
      return {
        data,
        error: data.message,
      };
    }
  } catch (error) {
    // toast.error(handleError(error), { ...TOAST_CONFIG });
    toast.error(error.response.data.message, { ...TOAST_CONFIG });
    return {
      error: error.response.data.message,
      data: null,
    };
  }
};

export default axios;
