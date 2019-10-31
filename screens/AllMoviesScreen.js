import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

class AllMoviesScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>I'm the All movie's screen !</Text>
        <Button
          title='DetailOfTheMovie'
          onPress={() => {
            this.props.navigation.navigate('MovieDetail');
          }}></Button>
      </View>
    );
  }
}

AllMoviesScreen.navigationOptions = {
  headerTitle: 'List of Movies'
};
const styles = StyleSheet.create({});

export default AllMoviesScreen;
