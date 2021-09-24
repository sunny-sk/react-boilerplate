import * as axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';
const instance = axios.create();

instance.interceptors.request.use(
  (config) => {
    if (config.headers.Authorization) {
      const token = ''; // get token here from localStorage or coockie;
      if (token) {
        config.headers.Authorization = token;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// saw the response & modify according to requirement
instance.interceptors.response.use(
  (response) => {
    const transFormedResponse = { response: null, error: null, code: null };
    if (response.data) {
      return { ...transFormedResponse, response: [] };
    } else {
      return { ...transFormedResponse, response: [] };
    }
    // add more cases here
  },
  (error) => {
    console.log(error);
    return Promise.reject(error).then((err) => {
      //modify here & retrun
      return err;
    });
  }
);

export default instance;
