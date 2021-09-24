/* eslint-disable react/prop-types */
import { USER_LOCALSTORAE_KEY } from 'lib/constants/constant';
import { useLocaStorage, useToast } from 'lib/hooks';
import React, { createContext, useEffect, useState } from 'react';

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
  const { showError, showSuccess } = useToast();
  const { getItem, setItem, removeItem } = useLocaStorage();
  // states

  const [authData, setAuthData] = useState();
  //The loading part will be explained in the persist step session
  const [loading, setLoading] = useState(true);

  const loadStorageData = async () => {
    try {
      // Try get the data from Local Storage
      const _authData = getItem(USER_LOCALSTORAE_KEY);
      if (_authData) {
        const { error, data } = {}; // call webIndex api here
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
    } catch (error) {
      setLoading(false);
      showError(error.message);
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
        <>{/* add loader here */}</>
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
