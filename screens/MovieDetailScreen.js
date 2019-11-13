import React from 'react';
import { StyleSheet, View, Text, WebView } from 'react-native';
import { ImgMovie } from '../components';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/headerButton';
import TMBService from '../services/tmdb-service';
import { withNavigation } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAsync } from '../redux/actions/FavoritesAction';

class MovieDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    let HeaderTitle = navigation.getParam('movieTitle');
    const favId = navigation.getParam('movieId');
    const favPoster = navigation.getParam('moviePoster');
    console.log('[THE navi]', navigation);
    return {
      headerTitle: HeaderTitle,
      headerRight: (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item title='Watch' iconName='ios-eye' onPress={() => {}} />
          <Item
            title='Favoris'
            iconName='ios-star'
            onPress={() => {
              navigation.state.params.addMovieFav({
                id: favId,
                poster_path: favPoster
              });
              navigation.navigate('FavoriteAndToWatch');
            }}
          />
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
    console.log('[THE PROPS]', this.props);
    console.log('[THE state]', this.state);
    this.props.navigation.setParams({
      addMovieFav: this.props.actions.addMovieFav,
      deleteMovieFav: this.props.actions.deleteMovieFav
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

    return (
      <ScrollView>
        <View>
          <View style={styles.detailContainer}>
            <View style={styles.imgContainer}>
              <ImgMovie imageUrl={this.state.MovieDetail.poster_path} />
            </View>
            <View>
              <Text style={{ fontFamily: 'open-sans-bold', fontSize: 18 }}>
                {this.state.MovieDetail.title || this.state.MovieDetail.name}
              </Text>
              <Text> De todd Phillips</Text>
              <Text> Avec Joaquin Phoenix, Robert De Niro, Zazie Beetz, </Text>
              <Text> Sortie 09 oct. 2019</Text>
            </View>
          </View>
          <View style={{ width: 200, height: 300 }}></View>
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
              Note : 8/10
            </Text>
          </View>
        </View>
      </ScrollView>
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

const mapActionsToProps = (payload) => ({
  actions: {
    addMovieFav: bindActionCreators(addAsync, payload),
    deleteMovieFav: bindActionCreators(deleteAsync, payload)
  }
});

export default connect(
  null,
  mapActionsToProps
)(withNavigation(MovieDetailScreen));
