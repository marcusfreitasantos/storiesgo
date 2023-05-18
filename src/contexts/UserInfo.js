import React from 'react';
import {createContext, useState} from 'react';
export const GlobalContext = createContext({});

export function InfoProvider({children}) {
  const [userInfo, setUserInfo] = useState('');
  const [token, setToken] = useState('');
  const [trialPeriod, setTrialPeriod] = useState(0);
  const [subscriptionStatus, setSubscriptionStatus] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        userInfo,
        setUserInfo,
        token,
        setToken,
        trialPeriod,
        setTrialPeriod,
        subscriptionStatus,
        setSubscriptionStatus,
      }}>
      {children}
    </GlobalContext.Provider>
  );
}
