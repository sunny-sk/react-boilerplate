import { Modal } from 'components';
import { useLocaStorage, useToast } from 'hooks';
import { USER_LOCALSTORAE_KEY } from 'lib/constants';
import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';
import { webIndexApi } from 'utils/http';

import Classes from '../../global.module.css';
export const AuthContext = createContext({
  authData: null,
  errorMessage: null,
  successMessage: null,
  loading: true,
  signIn: async (data) => data,
  sessionExpired: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  // states
  const { showError, showSuccess } = useToast();
  const [authData, setAuthData] = useState();
  //The loading part will be shown in the persist session
  const [loading, setLoading] = useState(false);

  // hooks
  const { getItem, setItem, removeItem } = useLocaStorage();

  const loadStorageData = async () => {
    // get the data from Local Storage
    const _authData = getItem(USER_LOCALSTORAE_KEY);
    if (_authData) {
      setLoading(true);
      const { error, data } = await webIndexApi(); // call webIndex api here
      if (error) {
        showError('Session Expired, Please login again');
        setLoading(false);
      } else {
        signIn({ ..._authData, ...data.data });
        setLoading(false);
      }
    } else {
      setLoading(false);
      setAuthData(undefined);
    }
  };

  const signIn = (authData) => {
    setItem(USER_LOCALSTORAE_KEY, authData);
    setAuthData(authData);
  };

  const logout = () => {
    removeItem(USER_LOCALSTORAE_KEY);
    setAuthData(undefined);
  };
  const setGlobalError = (text) => showError(text);
  const setGlobalSuccess = (text) => showSuccess(text);

  const sessionExpired = async () => {
    removeItem(USER_LOCALSTORAE_KEY);
    showError('Session Expired, Please login again');
    setAuthData(undefined);
  };

  // life cycles
  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    //This component will be used to encapsulate the whole App for auth data,
    <>
      {loading ? (
        <>
          <Modal
            contentClasses={`${Classes.appContent} text-center`}
            overlayClasses={Classes.appOverlay}
            isOpen={loading}>
            <div className="lds-spinner">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p>Please wait...</p>
          </Modal>
        </>
      ) : (
        <AuthContext.Provider
          value={{
            sessionExpired,
            setGlobalError,
            setGlobalSuccess,
            authData,
            loading,
            signIn,
            logout,
          }}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element,
  ]),
};
