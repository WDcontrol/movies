import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ImgMovie } from '../components';
import { processFontFamily } from 'expo-font';
import { Video } from 'expo-av';

class MovieDetailScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.detailContainer}>
          <View style={styles.imgContainer}>
            <ImgMovie
              image={
                'http://fr.web.img5.acsta.net/pictures/19/04/04/17/52/0652795.jpg'
              }
            />
          </View>
          <View>
            <Text style={{ fontFamily: 'open-sans-bold', fontSize: 18 }}>
              Joker
            </Text>
            <Text> De todd Phillips</Text>
            <Text> Avec Joaquin Phoenix, Robert De Niro, Zazie Beetz, </Text>
            <Text> Sortie 09 oct. 2019</Text>
          </View>
        </View>
        <View style={{ width: 200, height: 300 }}>
          <Video
            source={{
              uri: 'https://www.youtube.com/watch?v=98Y71K0hDOQ'
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode='cover'
            shouldPlay
            isLooping
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View style={styles.description}>
          <Text style={styles.text}>2h02 | Drame | Canada, U.S.A</Text>
          <Text style={styles.text}>
            Le film, qui relate une histoire originale inédite sur grand écran,
            se focalise sur la figure emblématique de l’ennemi juré de Batman.
            Il brosse le portrait d’Arthur Fleck, un homme sans concession
            méprisé par la société.
          </Text>
          <Text
            style={{
              fontFamily: 'open-sans-bold',
              alignSelf: 'center',
              marginTop: 10
            }}>
            Note : 8/10
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imgContainer: {
    width: 90,
    height: 120,
    marginTop: 30
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20
  },
  description: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 5
  },
  text: {
    marginTop: 12,
    fontFamily: 'open-sans'
  }
});

export default MovieDetailScreen;
