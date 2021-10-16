import { Modal, Page } from 'components';
import { useAuth } from 'lib/hooks';
import React, { useState } from 'react';

const Home = () => {
  const { logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const onLogoutHandler = () => {
    logout();
  };
  const showModalHandler = () => {
    setShowModal(true);
  };

  return (
    <Page>
      <div className="container">
        <Modal isOpen={showModal} onClose={setShowModal}>
          modal content
        </Modal>
        <h1>Home page</h1>
        <button onClick={onLogoutHandler}>Logout</button>
        <br />
        <button onClick={showModalHandler}>Show Modal</button>
      </div>
    </Page>
  );
};

export default Home;
