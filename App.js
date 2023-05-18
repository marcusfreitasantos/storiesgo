import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import MainStack from './src/stacks/MainStack';
import {InfoProvider} from './src/contexts/UserInfo';
import {initConnection} from 'react-native-iap';

import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://381804cea915445c8fad82851f839f56@o4505206385016832.ingest.sentry.io/4505206387900416',
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
