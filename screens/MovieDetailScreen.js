import React from 'react';
import { StyleSheet, View, Text, WebView, Button } from 'react-native';
import { ImgMovie } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';
import TMBService from '../services/tmdb-service';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import * as SMS from 'expo-sms';
import ContactsScreen from './ContactsScreen';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAsync, deleteAsync } from '../redux/actions/FavoritesAction';


class MovieDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let HeaderTitle = navigation.getParam('movieTitle');
    const favId = navigation.getParam('movieId');
    const favPoster = navigation.getParam('moviePoster');
    const watched = navigation.state.params.watched;
    const favorites = navigation.state.params.favorites;
    // console.log("nav", navigation);

    let isInWatchedReducer =
      watched != undefined ? watched.find((obj) => obj.id == favId) : false;
    let isInFavoritesReducer =
      favorites != undefined ? favorites.find((obj) => obj.id == favId) : false;
    return {
      headerTitle: HeaderTitle,
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          {!isInWatchedReducer ? (
            <Item
              title='Watch'
              iconName='ios-eye'
              onPress={() => {
                navigation.state.params.addMovieWatch({
                  id: favId,
                  poster_path: favPoster
                });
                navigation.navigate('FavoriteAndToWatch');
              }}
            />
          ) : (
            <Item
              title='Watch'
              iconName='ios-eye-off'
              onPress={() => {
                navigation.state.params.deleteMovieWatch(favId);
                navigation.navigate('FavoriteAndToWatch');
              }}></Item>
          )}
          {!isInFavoritesReducer ? (
            <Item
              title='Favorite'
              iconName='ios-star-outline'
              onPress={() => {
                navigation.state.params.addMovieFav({
                  id: favId,
                  poster_path: favPoster
                });
                navigation.navigate('FavoriteAndToWatch');
              }}
            />
          ) : (
            <Item
              title='Favorite'
              iconName='ios-star'
              onPress={() => {
                navigation.state.params.deleteMovieFav(favId);
                navigation.navigate('FavoriteAndToWatch');
              }}></Item>
          )}
        </HeaderButtons>
      )
    };
  };

  serv = new TMBService();
  state = {
    MovieDetail: [],
    MovieID: null
  };

  componentDidMount() {
    const changeButtonColor = (iconebutton) => {
      if (iconebutton === 'ios-star-outline') iconebutton = 'ios-star';
      else iconebutton = 'ios-star-outline';

      return iconebutton;
    };

    this.props.navigation.setParams({
      addMovieFav: this.props.actions.addMovieFav,
      deleteMovieFav: this.props.actions.deleteMovieFav,
      addMovieWatch: this.props.actions.addMovieWatch,
      deleteMovieWatch: this.props.actions.deleteMovieWatch,
      iconeButtonHandler: changeButtonColor,
      favorites: this.props.favorites,
      watched: this.props.watched
    });

    const MovieId = this.props.navigation.getParam('movieId');
    this.setState({ MovieID: MovieId });
    if (this.props.navigation.getParam('typeOfContent') === 0) {
      // movie
      this.serv.getMovieDetails(MovieId).then((resp) => {
        this.setState({ MovieDetail: resp.data });
      });
    } else {
      this.serv.getTVDetails(MovieId).then((resp) => {
        // tv show
        this.setState({ MovieDetail: resp.data });
      });
    }
  }
  render() {
    const timeConvert = (n) => {
      let num = n;
      let hours = num / 60;
      let rhours = Math.floor(hours);
      let minutes = (hours - rhours) * 60;
      let rminutes = Math.round(minutes);
      return rhours + ' hour(s) and ' + rminutes + ' minute(s)';
    };
    //console.log('detail,', this.state.MovieDetail);
    // console.log("watched", this.props.watched);
    // console.log("favorites", this.props.favorites);

    return (
      <ScrollView>
        <View>
          <View style={styles.detailContainer}>
            <View style={styles.imgContainer}>
              <ImgMovie imageUrl={this.state.MovieDetail.poster_path} />
            </View>
            <View style={{ width: 250 }}>
              <Text
                style={{
                  fontFamily: 'open-sans-bold',
                  fontSize: 18,
                  marginBottom: 5
                }}>
                {this.state.MovieDetail.title || this.state.MovieDetail.name}
              </Text>

              {/* <Text> Avec  </Text> */}
              <View style={styles.detailcontainer}>
                <Text>
                  Avec:
                  {this.state.MovieDetail.credits
                    ? this.state.MovieDetail.credits.cast
                        .slice(0, 5)
                        .map((i) => {
                          return <Text>{i.name} </Text>;
                        })
                    : null}
                </Text>
              </View>
              <Text>
                date de sortie : {this.state.MovieDetail.release_date}
              </Text>
            </View>
          </View>
          <View style={styles.description}>
            <Text style={styles.text}>
              {timeConvert(this.state.MovieDetail.runtime)}
              {this.state.MovieDetail && this.state.MovieDetail.genres
                ? this.state.MovieDetail.genres.map((data) => {
                    return <Text>| {data.name} </Text>;
                  })
                : null}
            </Text>
            <Text style={styles.text}>{this.state.MovieDetail.overview}</Text>
            <Text
              style={{
                fontFamily: 'open-sans-bold',
                alignSelf: 'center',
                marginTop: 10
              }}>
              Note : {this.state.MovieDetail.vote_average}/10
            </Text>
          </View>
        </View>

              <Button title='Contacts' onPress={() => this.props.navigation.navigate('Contacts')}></Button>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imgContainer: {
    width: 90,
    height: 150,
    marginTop: 30,
    marginRight: 15
  },
  detailcontainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
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
    fontFamily: 'open-sans',
    fontSize: 14
  }
});

const mapActionsToProps = (payload) => ({
  actions: {
    addMovieFav: bindActionCreators(addAsync, payload),
    deleteMovieFav: bindActionCreators(deleteAsync, payload),
    addMovieWatch: bindActionCreators(addAsyncWatch, payload),
    deleteMovieWatch: bindActionCreators(deleteAsyncWatch, payload)
  }
});

const mapStateToProps = (stateStore) => {
  return {
    favorites: stateStore.favoritesAndWatchedReducer.favorites,
    watched: stateStore.watchedReducer.watched
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withNavigation(MovieDetailScreen));
