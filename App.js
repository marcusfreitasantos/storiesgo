import React from 'react';
import {SENTRY_CLIENT_KEY} from '@env';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import MainStack from './src/stacks/MainStack';
import {InfoProvider} from './src/contexts/UserInfo';
import {initConnection} from 'react-native-iap';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: SENTRY_CLIENT_KEY,
});

export default () => {
  try {
    initConnection();
  } catch (err) {
    console.log('erro de inicialização:', err);
  }

  return (
    <NavigationContainer>
      <InfoProvider>
        <ThemeProvider theme={theme}>
          <MainStack />
        </ThemeProvider>
      </InfoProvider>
    </NavigationContainer>
  );
};
