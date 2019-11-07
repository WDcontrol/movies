import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { ScrollViewComponent } from '../components';

class HomePage extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.logo}>
            <Text style={styles.textLogo}>LOGO</Text>
          </View>
          <View>
            <Text style={styles.categories}>Films les mieux notés</Text>

            <ScrollViewComponent></ScrollViewComponent>

            <Text style={styles.categories}>Films à venir</Text>
            <ScrollViewComponent></ScrollViewComponent>

            <Text style={styles.categories}>Films au cinéma actuellement</Text>
            <ScrollViewComponent></ScrollViewComponent>

            <Text style={styles.categories}>Films populaires</Text>
            <ScrollViewComponent></ScrollViewComponent>

            <Text style={styles.categories}>Séries populaires</Text>
            <ScrollViewComponent></ScrollViewComponent>

            <Text style={styles.categories}>Séries les mieux notées</Text>
            <ScrollViewComponent></ScrollViewComponent>

            <Text style={styles.categories}>Acteurs populaires</Text>
            <ScrollViewComponent></ScrollViewComponent>
          </View>
        </ScrollView>
      </View>
    );
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

export default HomePage;
