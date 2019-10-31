import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
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

    return (
      <View style={styles.container}>
        <Text>Test de la police d'ecriture</Text>
        <Text style={styles.test}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  test: {
    fontFamily: 'open-sans-bold',
    fontSize: 18
  }
});
