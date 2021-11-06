// error message rectifier
export const handleError = (err) => {
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
