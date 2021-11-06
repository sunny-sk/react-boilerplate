/* eslint-disable no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Page } from 'components';
import { useQueryParam, useToast } from 'hooks';
import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { resetPasswordSchema } from 'utils/validation';
const ResetPassword = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { getParams } = useQueryParam();
  const { showSuccess, showError } = useToast();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resetPasswordSchema) });

  const onSubmit = (data) => {
    const token = getParams('t');
    const email = getParams('e');
    if (!token || !email) {
      showError('Invalid Url');
      return;
    }
    data.password = md5(data.password);
    // console.log(data, token, email);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      reset();
      showSuccess('Password reset succesfully!');
      history.push('/login');
    }, 2000);
  };
  useEffect(() => {
    reset();
  }, []);
  return (
    <Page pageTitle="Reset Password">
      <div>
        <br />
        <br />
        <div className="container">
          <h1 className="text-center">Reset Password</h1>
          <div className="row mt-3">
            <div className="col-6 offset-sm-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  defaultValue=""
                  inputConClassName={'mt-4'}
                  type="password"
                  placeholder="******"
                  label="Password"
                  name="password"
                  {...register('password')}
                  error={errors.password?.message}
                  leftIcon={<i className="fas fa-key"></i>}
                  rightIcon={<i className="fas fa-eye"></i>}
                />
                <Input
                  defaultValue=""
                  inputConClassName={'mt-4'}
                  type="password"
                  placeholder="******"
                  label="Confirm Password"
                  name="confirmPassword"
                  {...register('confirmPassword')}
                  error={errors.confirmPassword?.message}
                  leftIcon={<i className="fas fa-key"></i>}
                  rightIcon={<i className="fas fa-eye"></i>}
                />
                <br />
                <br />
                {isLoading && <p className="text-center">Loading...</p>}
                <Button
                  disabled={isLoading}
                  className="btn-block"
                  title="Reset Password"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default ResetPassword;
