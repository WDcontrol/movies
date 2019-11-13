import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ImgMovie } from '../components';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';

class MovieFlatlist extends React.Component {
    static defaultProps = {
        movies: [],
        typeOfContent: 0, // film
    };

    onImgPress(Movie,TypeOfContent){
        this.props.navigation.navigate('MovieDetail',
            {
                movieId:Movie.id,
                movieTitle:Movie.title || Movie.name,
                typeOfContent: TypeOfContent
            }
        );
    }

    render(){
      console.log('hienhien aaaaah', this.props.movies);
      
        return(
            this.props.movies.length != 0 ?
              <FlatList
              data={this.props.movies.results}
              renderItem={({item}) => (
                  <View style={styles.movieContainer}>
                      <TouchableOpacity style={styles.img} onPress={() => this.onImgPress(item,this.props.typeOfContent)}>
                      <ImgMovie imageUrl={item.poster_path}></ImgMovie>
                          <View style={styles.details}>
                            <Text style={{backgroundColor:'green'}}>{item.title}</Text>
                            <Text style={{backgroundColor:'blue'}}>{item.release_date}</Text>
                            <Text style={{backgroundColor:'red'}}>{item.vote_average}</Text>
                            <Text style={{backgroundColor:'purple'}}>{item.vote_count}</Text>
                          </View>
                      </TouchableOpacity>
                  </View>
              )} />
            :
            <Text>No data</Text>
        )
    }
}

const styles = StyleSheet.create({
    movieContainer: {
      backgroundColor:'pink',
      height: 180,
      width: 350,
      marginHorizontal: 5,
      marginVertical: 10,
      flexDirection:'row',
      justifyContent: 'space-between'
    },
    img: {
      height: 180,
      width: 120
    },
    details: {
      width: 50
    }
  });
  
  const mapStateToProps = (stateStore) => {
    return {
      tmdbService: stateStore.serviceReducer.tmdbService
    };
  };
  
  export default withNavigation(connect(mapStateToProps)(MovieFlatlist));