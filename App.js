import React from 'react';
import { Text } from 'react-native';
import { Linking } from 'expo';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import SplashScreen from './screens/SplashScreen';
import RegisterScreen from './screens/RegisterScreen';

const HomeNavigator = createSwitchNavigator({
  Main: HomeScreen,
  Register: RegisterScreen,
  Login: LoginScreen,
  Welcome: WelcomeScreen,
});

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: () => (
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            marginBottom: 10,
            // marginLeft: '40%',
            // justifyContent: 'center',
            // alignItems: 'center',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Home
        </Text>
      ),
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: () => (
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            marginBottom: 10,
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Settings
        </Text>
      ),
    },
  },
});

const InitialNavigator = createSwitchNavigator({
  Splash: { screen: SplashScreen },
  App: { screen: AppNavigator },
});

const AppContainer = createAppContainer(InitialNavigator);
const prefix = Linking.makeUrl('/');
const App = () => {
  const link = [prefix];
  console.log(prefix);

  return <AppContainer uriprefix={link} />;
};

export default App;
