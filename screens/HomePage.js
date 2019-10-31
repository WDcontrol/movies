import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

class HomePage extends React.Component {
  render() {
    return (
      <View>
        <Text>I'm the Home page screen !</Text>
        <Button title='Go to All movies' onPress={() => {}}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default HomePage;
