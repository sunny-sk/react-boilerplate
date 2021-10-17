/* eslint-disable no-unused-vars */
import { Button, Page } from 'components';
import { useAuth, useQueryParam, useToast } from 'lib/hooks';
import { POST } from 'lib/utils/http';
import { URL } from 'lib/utils/url';
import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
const Login = () => {
  //states
  const [isLoading, setIsLoading] = useState(false);
  // hooks
  const history = useHistory();
  const { signIn, authData } = useAuth();
  const { showSuccess, showError } = useToast();
  const { getParams } = useQueryParam();
  // functions
  const onLoginHandler = async () => {
    setIsLoading(true);
    const { data, error } = await POST(URL.login, {
      payload: {
        email: 'smarty.devoloper@gmail.com',
        password: md5('12345'),
      },
    });
    setIsLoading(false);
    if (error) {
      showError(error);
    } else {
      signIn(data.user);
      showSuccess('Loggedin successfully!');
      const redirectUrl = getParams('redirect');
      if (redirectUrl) {
        history.replace(redirectUrl);
      } else {
        history.replace('/');
      }
    }
  };
  // lifecycle hook
  useEffect(() => {
    if (authData) {
      history.replace('/');
    }
  }, []);
  // render html
  return (
    <Page pageTitle="Login">
      Login Here
      <br />
      {isLoading && <p>Loading...</p>}
      <br />
      <Button onClick={onLoginHandler}>Login</Button>
    </Page>
  );
};

export default Login;
