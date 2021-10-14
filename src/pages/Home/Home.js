import { Page } from 'components';
import { useAuth } from 'lib/hooks';
import React from 'react';

const Home = () => {
  const { logout } = useAuth();
  const onLogoutHandler = () => {
    logout();
  };
  return (
    <Page>
      <h1>Home page</h1>
      <button onClick={onLogoutHandler}>Logout</button>
    </Page>
  );
};

export default Home;
