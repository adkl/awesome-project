import React from 'react';
import { Animated, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './Login/loginScreen.component';
import HomeScreen from './Home/homeScreen.component';

const AppNavi = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  },

});

export default class App extends React.Component {

  render() {

    return (
      <AppNavi ref={nav => { this.navigator = nav; }} />

    )
  }
}

