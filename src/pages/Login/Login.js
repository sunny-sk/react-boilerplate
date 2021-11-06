/* eslint-disable no-unused-vars */
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Icon, Input, Page } from 'components';
import { useAuth, useQueryParam, useToast } from 'hooks';
import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { loginApi } from 'utils/http';
import { loginSchema } from 'utils/validation';
const Login = () => {
  //states
  const [isLoading, setIsLoading] = useState(false);
  // hooks
  const history = useHistory();
  const { signIn, authData } = useAuth();
  const { showSuccess } = useToast();
  const { getParams } = useQueryParam();

  // form
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  // functions
  const onSubmit = async (formData) => {
    // console.log(formData);
    setIsLoading(true);
    const { data } = await loginApi({
      email: 'smarty.devoloper@gmail.com',
      password: '12345',
    });
    setIsLoading(false);
    console.log(data);
    if (data) {
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
      <>
        <h1 className="text-center mt-5">Login Here</h1>
        <br />
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-1">
                <Input
                  label="Email/Username"
                  placeholder="Abc@gmail.com"
                  {...register('loginId')}
                  leftIcon={<Icon name="MdOutlineMail" size={23} />}
                  error={errors.loginId?.message}
                />
              </div>
              <div className="mt-3">
                <Input
                  label="Password"
                  type="password"
                  placeholder="Enter password here"
                  {...register('password')}
                  error={errors.password?.message}
                  leftIcon={<Icon name="RiLockPasswordFill" size={23} />}
                />
              </div>
              <br />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <Button disabled={isLoading} type="submit">
                  Login
                </Button>
              )}
            </form>
          </div>
        </div>
        <br />
      </>
    </Page>
  );
};

export default Login;
