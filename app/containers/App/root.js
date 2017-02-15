import React, { Component } from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import Navigation from 'navigation';

class RootContainer extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Navigation />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RootContainer;
