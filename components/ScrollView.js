import React from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import {ImgMovie} from '../components';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'

class Flatlist extends React.Component{

    state = {
        movies: [],
    }

    componentDidMount(){
        this.props.tmdbService.getTopRatedMovies().then((res)=>{
            let arr = []
            arr.push(res.data)
            this.setState({movies: res.data})
        }).catch((err)=>console.log(err))
    }

    onImgPress(MovieId){
        this.props.navigation.navigate('MovieDetail',
            {movieId:MovieId}
        );
    }

    render(){
        return(
            this.state.movies.length != 0 ?
                    <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={this.state.movies.results}
                    renderItem={({item}) => (
                        <View style={styles.imgContainer}>
                            <TouchableOpacity onPress={() => this.onImgPress(item.id)}>
                                <ImgMovie imageUrl={item.poster_path}></ImgMovie>
                            </TouchableOpacity>
                        </View>
                    )} />
            :
            <Text>No data</Text>

        )
    }
}

const styles = StyleSheet.create({
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    imgContainer:{
        height: 180,
        width: 120,
        marginHorizontal: 5,
        marginVertical: 10
    }
  });

const mapStateToProps = (stateStore) => {
    return ({
        tmdbService: stateStore.serviceReducer.tmdbService
    });
}

export default withNavigation(connect(mapStateToProps)(Flatlist))