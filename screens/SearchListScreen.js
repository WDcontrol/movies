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
import { ScrollViewComponent } from "../components";


class SearchListScreen extends React.Component {

    state = {
        MoviesDetails: []
      };

    componentDidMount() {
        console.log('oui');


        AsyncStorage.getItem('search').then(data => {
            // console.log(data);
            this.props.tmdbService
            .getMoviesByName(data)
            .then(res => {
                // console.log('ressssssssssssssss', res);
                
              this.setState({ MoviesDetails: res.data });
              console.log('ah ouias ', this.state.MoviesDetails);
              
            })
            .catch(err => console.log(err));
        })
        
    }

    render(){

        return (
            <View>
                <Text>Oui</Text>
                <ScrollView>

                    <ScrollViewComponent
                    movies={this.state.MoviesDetails}
                    ></ScrollViewComponent>

                </ScrollView>
            </View>
        );
    }
//     this.props.tmdbService
// .getMoviesByName('lion')
// .then((res) => {
//   console.log(res.data.results[0]);
  


// })
}

const mapStateToProps = stateStore => {
    return {
      tmdbService: stateStore.serviceReducer.tmdbService
    };
  };

export default withNavigation(connect(mapStateToProps)(SearchListScreen));

