import React from 'react';
import { View, StyleSheet, FlatList, Text} from 'react-native';
import {ImgMovie} from '../components';
import TMDBService from '../services/tmdb-service'
import { connect } from 'react-redux';

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

    onImgPress(){
        this.props.navigation.navigate('AddFavorites');
    }

    render(){
        return(
            this.state.movies.length != 0 ?
                    <FlatList
                    horizontal={true}
                    data={this.state.movies.results}
                    renderItem={({item}) => (
                        <Text>{item.poster_path}</Text>
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
    }
  });

const mapStateToProps = (stateStore) => {
    return ({
        tmdbService: stateStore.serviceReducer.tmdbService
    });
}

export default connect(mapStateToProps)(Flatlist)