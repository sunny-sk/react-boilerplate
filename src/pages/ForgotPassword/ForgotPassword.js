/* eslint-disable no-unused-vars */
import { Page } from 'components';
import { useToast } from 'lib/hooks';
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { showSuccess } = useToast();
  const onResetPasswordHandler = () => {
    showSuccess('Link sent successfully!');
  };
  return (
    <Page>
      Forgot Password here
      <button onClick={onResetPasswordHandler}>send link</button>
    </Page>
  );
};

export default ForgotPassword;
