import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { ImgMovie } from '../components';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

class Flatlist extends React.Component {
  static defaultProps = {
    movies: []
  };

  static defaultProps = {
    movies: [],
    typeOfContent: 0 // film
  };

  onImgPress(Movie, TypeOfContent) {
    this.props.navigation.navigate('MovieDetail', {
      movieId: Movie.id,
      moviePoster: Movie.poster_path,
      movieTitle: Movie.title || Movie.name,
      typeOfContent: TypeOfContent
    });
  }

    render(){
        return(
            this.props.movies.length != 0 ?
              <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={this.props.movies.results}
              renderItem={({item}) => (
                  <View style={styles.imgContainer}>
                      <TouchableOpacity onPress={() => this.onImgPress(item,this.props.typeOfContent)}>
                          <ImgMovie imageUrl={item.poster_path}></ImgMovie>
                      </TouchableOpacity>
                  </View>
              )} />
            :
            <Text>Chargement ...</Text>
        )
    }
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgContainer: {
    height: 180,
    width: 120,
    marginHorizontal: 5,
    marginVertical: 10
  }
});

const mapStateToProps = (stateStore) => {
  return {
    tmdbService: stateStore.serviceReducer.tmdbService
  };
};

export default withNavigation(connect(mapStateToProps)(Flatlist));
