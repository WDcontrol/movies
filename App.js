import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import * as Font from 'expo-font';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

class App extends React.Component {
  state = {
    fontLoaded: false
  };

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={fetchFonts}
          onFinish={() => {
            this.setState({ fontLoaded: true });
          }}
        />
      );
    }

    return <AppNavigator style={styles.container}></AppNavigator>;
  }
}

export default App;

const styles = StyleSheet.create({});
