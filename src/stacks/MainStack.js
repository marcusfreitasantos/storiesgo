import React from 'react';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Dashboard from '../screens/Dashboard';
import Config from '../screens/Config';
import Purchase from '../screens/Purchase';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import theme from '../global/styles/theme';
import {Home, User, DollarSign} from 'react-native-feather';
import Preload from '../screens/Preload';

export default () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarHideOnKeyboard: true,
      unmountOnBlur: true,
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: theme.colors.white,
      tabBarInactiveTintColor: theme.colors.primaryDark,
      tabBarStyle: {backgroundColor: theme.colors.primary},
      tabBarIcon: ({color}) => {
        let Icon = Home;
        switch (route.name) {
          case 'Dashboard':
            Icon = Home;
            break;

          case 'Config':
            Icon = User;
            break;

          case 'Plans':
            Icon = DollarSign;
            break;
        }

        return <Icon width={24} height={24} stroke={color} />;
      },
    })}>
    <Tab.Screen
      name="Preload"
      component={Preload}
      options={{tabBarButton: () => null, tabBarStyle: {display: 'none'}}}
    />
    <Tab.Screen
      name="SignIn"
      component={SignIn}
      options={{tabBarButton: () => null, tabBarStyle: {display: 'none'}}}
    />
    <Tab.Screen
      name="Purchase"
      component={Purchase}
      options={{tabBarButton: () => null, tabBarStyle: {display: 'none'}}}
    />
    <Tab.Screen name="Dashboard" component={Dashboard} />
    <Tab.Screen name="Config" component={Config} />
    <Tab.Screen
      name="SignUp"
      component={SignUp}
      options={{tabBarButton: () => null, tabBarStyle: {display: 'none'}}}
    />
  </Tab.Navigator>
);
