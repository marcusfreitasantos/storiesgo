import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/styles/theme';
import MainStack from './src/stacks/MainStack';
import {InfoProvider} from './src/contexts/UserInfo';
import {initConnection} from 'react-native-iap';

export default () => {
  try {
    initConnection();
  } catch (err) {
    console.log('erro:', err);
  }

  return (
    <>
      <NavigationContainer>
        <InfoProvider>
          <ThemeProvider theme={theme}>
            <MainStack />
          </ThemeProvider>
        </InfoProvider>
      </NavigationContainer>
    </>
  );
};
