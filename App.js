import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import FacebookScreen from './screens/SocialFacebookScreen';
import InstagramScreen from './screens/SocialInstagramScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: { screen: FacebookScreen },
  Instagram: { screen: InstagramScreen },
});

const AppContainer = createAppContainer(TabNavigator);