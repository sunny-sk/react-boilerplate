import { AuthContext } from 'lib/context/authContext';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export const useLang = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useLang must be used within an LangProvider');
  }
  return context;
};

export const useToast = () => {
  const showError = (message, opts) => {
    toast.error(
      message,
      opts
        ? opts
        : { progress: 0, autoDismissTimeout: 4000, hideProgressBar: true }
    );
  };

  const showSuccess = (message, opts) => {
    toast.success(
      message,
      opts
        ? opts
        : { progress: 0, autoDismissTimeout: 4000, hideProgressBar: true }
    );
  };

  return {
    showError,
    showSuccess,
  };
};

export const useRouteData = () => {
  const location = useLocation();
  return {
    location,
    routeData: {
      ...location.state,
    },
  };
};

export const useQueryParam = () => {
  const location = useLocation();

  const urlSearchParams = new URLSearchParams(location.search);
  return {
    getQueryParams: (key) => urlSearchParams.get(key),
  };
};
export const useLocaStorage = () => {
  const setItem = (key, value) => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const clearAll = () => {
    localStorage.clear();
  };
  const removeItem = (key) => {
    localStorage.removeItem(key);
  };
  const getItem = (key) => {
    if (key) {
      const data = localStorage.getItem(key);
      if (data) {
        return JSON.parse(data);
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  return {
    removeItem,
    getItem,
    setItem,
    clearAll,
  };
};
