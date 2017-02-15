import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-native-elements';
import { Creators as LoginCreators } from 'containers/Login/actions';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <Button
            onPress={this.props.actions.logout}
            raised
            backgroundColor={'grey'}
            borderRadius={5}
            title='LOGOUT' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30
  },
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    logout: LoginCreators.logout
  }, dispatch),
});

export default connect(null, mapDispatchToProps)(Home);
