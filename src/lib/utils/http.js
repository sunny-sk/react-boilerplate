import axios from 'axios';
import { USER_LOCALSTORAE_KEY } from 'lib/constants';

const GET = async (URL, { authenticate }) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
    };
    if (authenticate) {
      const authData = JSON.parse(localStorage.getItem(USER_LOCALSTORAE_KEY));
      headers['Authorization'] = authData.token;
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
      error: error,
      data: null,
    };
  }
};
const POST = async (
  URL,
  { authenticate, payload = {}, headers: customHeaders = {} }
) => {
  try {
    const headers = {
      'Content-Type': 'application/json',
      ...customHeaders,
    };

    if (authenticate) {
      const authData = JSON.parse(localStorage.getItem(USER_LOCALSTORAE_KEY));
      headers['Authorization'] = authData.token;
    }
    const { data } = await axios.post(
      URL,
      { ...payload },
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
      error: error.response.data.message,
      data: null,
    };
  }
};

export { GET, POST };
