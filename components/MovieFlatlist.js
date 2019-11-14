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
        return(
            this.props.movies.length != 0 ?
              <FlatList
              data={this.props.movies.results}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.img} onPress={() => this.onImgPress(item,this.props.typeOfContent)}>

                  <View style={styles.movieContainer}>
                    <View style={styles.imgCont}>
                      <ImgMovie imageUrl={item.poster_path}></ImgMovie>
                      </View>
                      <View style={styles.details}>
                            <Text style={styles.textMovie}>{item.title}</Text>
                            <Text style={styles.textMovie}>{item.release_date}</Text>
                            <Text style={styles.textMovie}>Note : {item.vote_average}/10</Text>
                            <Text style={styles.textMovie}>Votes : {item.vote_count}</Text>
                      </View>
                  </View>
                  </TouchableOpacity>

              )} />
            :
            <Text>Chargement ...</Text>
        )
    }
}

const styles = StyleSheet.create({
    movieContainer: {
      height: 180,
      width: 350,
      marginHorizontal: 5,
      marginVertical: 10,
      flexDirection:'row'
    },
    textMovie : {
      fontSize: 20
    },
    imgCont: {
      height: 180,
      width: 120,
      marginRight: 10
    },
    details: {
      width: 250,
      lineHeight: 50
    }
  });
  
  const mapStateToProps = (stateStore) => {
    return {
      tmdbService: stateStore.serviceReducer.tmdbService
    };
  };
  
  export default withNavigation(connect(mapStateToProps)(MovieFlatlist));