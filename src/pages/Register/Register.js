/* eslint-disable no-unused-vars */
import { Page } from 'components';
import { useAuth, useQueryParam, useToast } from 'lib/hooks';
import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, authData } = useAuth();
  const { getParams } = useQueryParam();
  const { showSuccess } = useToast();

  const onRegisterHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      signIn({
        name: 'sunny',
        sessionId: 'ttthdnnslkdsQKLf',
      });
      setIsLoading(false);
      showSuccess('Register successfully!');
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
    <Page pageTitle="Register">
      Register Here
      <br />
      {isLoading && <p>Loading...</p>}
      <br />
      <button onClick={onRegisterHandler}>Register</button>
    </Page>
  );
};

export default Register;
