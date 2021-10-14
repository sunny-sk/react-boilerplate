/* eslint-disable no-unused-vars */
import { Page } from 'components';
import { useToast } from 'lib/hooks';
import md5 from 'md5';
import React, { useState } from 'react';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccess } = useToast();
  const onResetPasswordHandler = () => {
    showSuccess('Password changed successfully');
  };
  return (
    <Page>
      Reset Password here
      <button onClick={onResetPasswordHandler}>Reset Password</button>
    </Page>
  );
};

export default ResetPassword;
