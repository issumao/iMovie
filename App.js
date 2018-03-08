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
import imageShowView from './src/Component/imageShowView';

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
    MovieDetails: {
      screen: MovieDetails,
    },
    imageShowView: {
      screen: imageShowView,
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f44444',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    // 渲染一个主堆栈
    return <RootStack />;
  }
};
