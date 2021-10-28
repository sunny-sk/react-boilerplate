/* eslint-disable no-unused-vars */
import axios from 'axios';
import { USER_LOCALSTORAE_KEY } from 'lib/constants';
import { URL } from 'lib/utils/url';

// error message rectifier
const handleError = (err) => {
  const code = err?.response?.data?.code || 999;
  switch (code) {
    case 500:
      return 'Some error has occured!, please try again later.'; //Server error
    case 400:
      return 'Some error has occured!, please try changing inputs'; //Invalid params, bad request
    case 404:
      return err?.response?.data?.message || 'Not found';
    case 422:
      return err?.response?.data?.message || 'Already taken';
    case 401:
      return 'Something is wrong! Try after signing in again'; //Access denied
    default:
      return 'Some error has occured!, please try again later.';
  }
};

// get method
/**
 * @param {String} URL
 * @param {Object} options
 * @param {Boolean} options.auth
 * @returns Prmoise
 */
const GET = async (URL, options = {}) => {
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
const POST = async (
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
    return {
      error: handleError(error),
      data: null,
    };
  }
};

// =============  api functions ==================
const loginApi = async (payload) => {
  return POST(URL.login, {
    options: {
      payload,
    },
  });
};

const registerApi = async (payload) => {
  return POST(URL.register, {
    options: {
      payload,
    },
  });
};
export { loginApi, registerApi };
