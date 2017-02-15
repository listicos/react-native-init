import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    paddingTop: 5,
  },
  iconContainer: {
    alignItems: 'center',
  },
  image: {
    marginBottom: 4,
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 13,
  },
});

export default class TabIcon extends Component {
  render () {
    return (
      <View style={styles.contain}>
        <View style={styles.iconContainer}>
          <Icon name='rowing' />
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
