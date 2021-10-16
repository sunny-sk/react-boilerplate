/* eslint-disable no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Page } from 'components';
import { Input } from 'components';
import { useAuth, useQueryParam, useToast } from 'lib/hooks';
import { registerSchema } from 'lib/utils/validation';
import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
const Register = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, authData } = useAuth();
  const { getParams } = useQueryParam();
  const { showSuccess } = useToast();
  const {
    reset,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  // console.log(watch('userEmail')); //
  // console.log(watch('password')); //
  const onSubmit = (data) => {
    data.password = md5(data.password);
    // console.log(data);
    setIsLoading(true);
    setTimeout(() => {
      signIn({
        name: 'sunny',
        sessionId: 'ttthdnnslkdsQKLf',
      });

      setIsLoading(false);
      reset();
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
    reset();
    if (authData) {
      history.replace('/');
    }
  }, []);
  return (
    <Page pageTitle="Register">
      <div>
        <br />
        <br />
        <div className="container">
          <h1 className="text-center">Register here</h1>
          <div className="row mt-3">
            <div className="col-6 offset-sm-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  defaultValue=""
                  placeholder="name@example.com"
                  label="Email address"
                  error={errors.userEmail?.message}
                  name="userEmail"
                  {...register('userEmail')}
                  type="text"
                  leftIcon={<i className="fas fa-envelope"></i>}
                />
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
                <br />
                <br />
                {isLoading && <p className="text-center">Loading...</p>}
                <Button
                  disabled={isLoading}
                  className="btn-block"
                  title="Register"
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

export default Register;
