import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  Button,
  AsyncStorage
} from "react-native";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { MovieFlatlistComponent } from "../components";


class SearchListScreen extends React.Component {

    state = {
        MoviesDetails: []
      };

    componentDidMount() {


        AsyncStorage.getItem('search').then(data => {
            this.props.tmdbService
            .getMoviesByName(data)
            .then(res => {                
              this.setState({ MoviesDetails: res.data });
              
            })
            .catch(err => console.log(err));
        })
        
    }

    render(){

        return (
            <View>
                <ScrollView>

                    <MovieFlatlistComponent
                    movies={this.state.MoviesDetails}
                    ></MovieFlatlistComponent>

                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = stateStore => {
    return {
      tmdbService: stateStore.serviceReducer.tmdbService
    };
  };

export default withNavigation(connect(mapStateToProps)(SearchListScreen));

