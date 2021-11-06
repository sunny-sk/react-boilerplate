import { TOAST_CONFIG } from 'constant';
import { AuthContext } from 'context/authContext';
import { LangContext } from 'context/langContext';
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
  const context = useContext(LangContext);
  if (!context) {
    throw new Error('useLang must be used within an LangProvider');
  }
  const { t: getLang, changeLang } = context;
  const t = (text) => {
    if (getLang) {
      return getLang(t);
    } else {
      return text;
    }
  };
  return { changeLang, t };
};

export const useToast = () => {
  const showError = (message, opts = {}) => {
    toast.error(message, { ...TOAST_CONFIG, ...opts });
  };

  const showSuccess = (message, opts) => {
    toast.success(message, {
      ...TOAST_CONFIG,
      ...opts,
    });
  };

  return {
    showError,
    showSuccess,
  };
};

export const useRouteData = () => {
  const location = useLocation();
  return {
    routeData: {
      ...location.state,
    },
  };
};

export const useQueryParam = () => {
  const location = useLocation();

  const urlSearchParams = new URLSearchParams(location.search);
  return {
    getParams: (key) => urlSearchParams.get(key),
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
    if (key) {
      localStorage.removeItem(key);
    }
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
