/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';

import Movies from './src/_Movies/Controller/Movies';
import MovieDetails from './src/_MovieDetails/MovieDetails';

import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

// 堆栈定义了多个视图，以及默认样式
const RootStack = StackNavigator(
  {
    Home: {
      screen: Movies,
    },
    Details: {
      screen: MovieDetails,
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default class App extends React.Component {
  render() {
    // 渲染一个主堆栈
    return <RootStack />;
  }
};
