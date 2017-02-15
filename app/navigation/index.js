import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, Switch } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Login from 'containers/Login';
import Home from 'containers/Home';
import ActivityIndicator from 'containers/ActivityIndicator';
import TabIcon from 'components/TabIcon';

const mapStateToProps = (state) => ({
  loading: state.app.loading,
  authenticated: state.login.authenticated,
});

const SwitchConnected = connect(mapStateToProps)(Switch);

class Navigation extends Component {
  render () {
    return (
      <Router>
        <Scene
          key="root"
          component={SwitchConnected}
          tabs
          unmountScenes
          selector={props => {
            if (props.loading) {
              return 'activityIndicator';
            }else{
              return props.authenticated ? "home" : "login";
            }
          }}
        >
          <Scene hideNavBar key="activityIndicator" component={ActivityIndicator} title="Loader" />
          <Scene hideNavBar key="login" component={Login} title="Login" />
          <Scene
            key='home'
            tabBarStyle={styles.tabBar}
            tabBarSelectedItemStyle={styles.tabBarSelectedItem}
            tabs
          >
            <Scene
              title={'Home'}
              hideNavBar
              icon={TabIcon}
              key='home1'
              component={Home}
            />
            <Scene
              title={'Home2'}
              hideNavBar
              icon={TabIcon}
              key='home2'
              component={Home}
            />
            <Scene
              title={'Home3'}
              hideNavBar
              icon={TabIcon}
              key='home3'
              component={Home}
            />
            <Scene
              title={'Home4'}
              hideNavBar
              icon={TabIcon}
              key='home4'
              component={Home}
            />
          </Scene>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'grey',
  },
  tabBarSelectedItem: {
    backgroundColor: '#CCCCCC',
  },
});

export default connect()(Navigation);
