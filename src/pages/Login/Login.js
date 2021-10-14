/* eslint-disable no-unused-vars */
import { Page } from 'components';
import { useAuth, useQueryParam, useToast } from 'lib/hooks';
import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
const Login = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, authData } = useAuth();
  const { showSuccess } = useToast();
  const { getParams } = useQueryParam();
  const onLoginHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      signIn({
        name: 'jh doee',
        sessionId: 'ttthdnnslkdsQKLf',
      });
      setIsLoading(false);
      showSuccess('Loggedin successfully!');
      const redirectUrl = getParams('redirect');
      if (redirectUrl) {
        history.replace(redirectUrl);
      } else {
        history.replace('/');
      }
    }, 2000);
  };
  useEffect(() => {
    if (authData) {
      history.replace('/');
    }
  }, []);
  return (
    <Page>
      Login Here
      <br />
      {isLoading && <p>Loading...</p>}
      <br />
      <button onClick={onLoginHandler}>Login</button>
    </Page>
  );
};

export default Login;
