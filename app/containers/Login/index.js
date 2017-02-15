import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Button,
} from 'react-native-elements';
import Images from 'themes/images';
import { Creators } from './actions';

class Login extends Component {
  render() {
    return (
      <Image source={Images.background} style={styles.container}>
        <Image source={Images.logo} style={styles.logo} />
        <Text style={styles.name}>React Native Init</Text>
        <View style={styles.buttonsContainer}>
          <Button
            onPress={this.props.actions.login}
            raised
            buttonStyle={styles.button}
            backgroundColor={'grey'}
            borderRadius={5}
            title='LOGIN' />
        </View>
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
  logo: {
    flex: 0.4,
    width: 120,
    resizeMode: 'contain',
  },
  name: {
    flex: 0.3,
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
    backgroundColor: 'transparent',
  },
  buttonsContainer: {
    flex: 0.3,
  },
  button: {
    width: 300,
  },
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    login: Creators.login
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(Login);
