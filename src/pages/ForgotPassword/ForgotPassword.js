import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, Page } from 'components';
import { useToast } from 'lib/hooks';
import { emailSchema } from 'lib/utils/validation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
const ForgotPassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showSuccess } = useToast();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(emailSchema) });
  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      reset();
      showSuccess('Link sent successfully!');
    }, 2000);
  };
  useEffect(() => {
    reset();
  }, []);
  return (
    <Page pageTitle="Forgot password">
      <div>
        <br />
        <br />
        <div className="container">
          <h1 className="text-center">Forgot Password</h1>
          <div className="row mt-3">
            <div className="col-6 offset-sm-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  defaultValue=""
                  placeholder="name@example.com"
                  label="Email address"
                  error={errors.email?.message}
                  name="email"
                  {...register('email')}
                  type="text"
                  leftIcon={<i className="fas fa-envelope"></i>}
                />
                <br />
                <br />
                {isLoading && <p className="text-center">Loading...</p>}
                <Button
                  disabled={isLoading}
                  className="btn-block"
                  title="Send Link"
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

export default ForgotPassword;
