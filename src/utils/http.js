import { GET, POST } from 'lib/axios';
import { URL } from 'utils/url';

// =============  api functions ==================
const loginApi = async (payload) => {
  return POST(URL.login, {
    payload,
  });
};

const registerApi = async (payload) => {
  return POST(URL.register, {
    payload,
  });
};
const webIndexApi = async () => {
  return GET(URL.webIndex, {
    options: {
      auth: true,
    },
  });
};
export { loginApi, registerApi, webIndexApi };
