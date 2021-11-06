// need to add logic
import { LANGS, USER_LANG_KEY } from 'constant';
import { useLocaStorage } from 'hooks';
import PropTypes from 'prop-types';
import React, { createContext, useEffect, useState } from 'react';

export const LangContext = createContext({
  t: (text) => text,
  changeLang: () => {},
});

export const LangProvider = ({ children }) => {
  const { getItem, setItem } = useLocaStorage();

  // states
  const [t, setT] = useState({
    hello: 'hello',
  });

  const loadDefaultLang = () => {
    // Try get the lang from Local Storage
    const _langData = getItem(USER_LANG_KEY);
    if (_langData) {
      setT(_langData);
    } else {
      // set default lang
      setT(null);
    }
  };

  const changeLang = (lang) => {
    if (LANGS[lang]) {
      const _langData = getItem(LANGS[lang]);
      setItem(USER_LANG_KEY, LANGS[lang]);
      setT(_langData);
    }
    return;
  };
  // life cycles
  useEffect(() => {
    loadDefaultLang();
  }, []);

  return (
    //This component will be used to encapsulate the whole App for lang (internationlization),
    <LangContext.Provider
      value={{
        t,
        changeLang,
      }}>
      {children}
    </LangContext.Provider>
  );
};

LangProvider.displayName = 'LangProvider';
LangProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element,
  ]),
};
