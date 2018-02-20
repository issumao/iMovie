
import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View
} from 'react-native';

export default class DetailsScreen extends React.Component {
    render() {
      // 1
      // return (
      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <Text>Details Screen</Text>
      //   </View>
      // );
      // 2
      // return (
      //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //     <Text>Details Screen</Text>
      //     <Button
      //       title="Go to Details... again"
      //       onPress={() => this.props.navigation.navigate('Details')}
      //     />
      //   </View>
      // );
      // 3
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go to Details... again"
            onPress={() => this.props.navigation.navigate('Details')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      );
    }
  }