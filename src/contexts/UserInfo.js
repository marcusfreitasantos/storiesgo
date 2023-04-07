import React from 'react';
import {createContext, useState} from 'react';
export const GlobalContext = createContext({});

export function InfoProvider({children}) {
  const [userInfo, setUserInfo] = useState('');
  const [token, setToken] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        userInfo,
        setUserInfo,
        token,
        setToken,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
