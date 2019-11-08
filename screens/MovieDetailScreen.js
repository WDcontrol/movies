import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ImgMovie } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';
import { Video } from 'expo-av';
import TMBService from '../services/tmdb-service';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

class MovieDetailScreen extends React.Component {
  serv = new TMBService();
  state = {
    MovieDetail: []
  };

  componentDidMount() {
    const MovieId = this.props.navigation.getParam('movieId');
    this.serv.getMovieDetails(MovieId).then((resp) => {
      this.setState({ MovieDetail: resp.data });
    });
  }

  render() {
    //console.log(this.state.MovieDetail.length, 'render');
    //console.log(this.state.MovieDetail.genres, 'render');
    //console.log(MovieId);

    return (
      <ScrollView>
        <View>
          <View style={styles.detailContainer}>
            <View style={styles.imgContainer}>
              <ImgMovie imageUrl={this.state.MovieDetail.poster_path} />
            </View>
            <View>
              <Text style={{ fontFamily: 'open-sans-bold', fontSize: 18 }}>
                {this.state.MovieDetail.title}
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
            <Text style={styles.text}>
              {this.state.MovieDetail.runtime} |
              {this.state.MovieDetail && this.state.MovieDetail.genres
                ? this.state.MovieDetail.genres.map((data) => {
                    return <Text> {data.name} </Text>;
                  })
                : null}
              | Canada, U.S.A
            </Text>
            <Text style={styles.text}>{this.state.MovieDetail.overview}</Text>
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
      </ScrollView>
    );
  }
}

MovieDetailScreen.navigationOptions = (navData) => {
  const movieTitle = navData.navigation.getParam('movieTitle');
  return {
    headerTitle: movieTitle,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Watch'
          iconName='ios-eye'
          onPress={() => {
            console.log('Ajouter a la liste de film à voir');
          }}
        />
        <Item
          title='Favoris'
          iconName='ios-star'
          onPress={() => {
            console.log('ajouter au fav');
          }}
        />
      </HeaderButtons>
    )
  };
};

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

export default withNavigation(MovieDetailScreen);
