import React from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import {ScrollViewComponent} from '../components';

class FavoriteAndWatchedMoviesScreen extends React.Component {
  render() {
    return(
      <View style={{marginTop:40}}>
        <ScrollView>
          <Text>Favories</Text>
          <View>
            <Text style={styles.categories}>Favories</Text>
            <ScrollViewComponent></ScrollViewComponent>
            <Text style={styles.categories}>A voir</Text>
            <ScrollViewComponent></ScrollViewComponent>
          </View>
          </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: '50%',
    backgroundColor: 'black',
    marginLeft: '25%',
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textLogo: {
    fontFamily: 'open-sans',
    color: 'white',
    fontSize: 20
  },
  categories: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: 'black',
    marginLeft: 5
  }
});

export default FavoriteAndWatchedMoviesScreen;
