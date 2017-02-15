import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Spinner from 'react-native-spinkit';
import Images from 'themes/images';

export default class ActivityIndicator extends Component {
  render() {
    return (
      <Image source={Images.background} style={styles.container}>
        <Spinner type='ThreeBounce' color='#FFFFFF' size={70} />
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
  },
});
