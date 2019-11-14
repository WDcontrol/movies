import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  Button, 
  AsyncStorage,
  
} from "react-native";
import { ScrollViewComponent } from "../components";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";
import SearchList from "./SearchListScreen";

class SearchScreen extends React.Component {
  state = {
    comedies: [],
    action: [],
    documentaries: [],
    romance: [],
    search: ''
  };

  componentDidMount() {
    //Comédies
    this.props.tmdbService
      .getMoviesByCategories(35)
      .then(res => {
        this.setState({ comedies: res.data });
      })
      .catch(err => console.log(err));

    //Action
    this.props.tmdbService
      .getMoviesByCategories(28)
      .then(res => {
        this.setState({ action: res.data });
      })
      .catch(err => console.log(err));

    //Documentary
    this.props.tmdbService
      .getMoviesByCategories(99)
      .then(res => {
        this.setState({ documentaries: res.data });
      })
      .catch(err => console.log(err));

    //SF
    this.props.tmdbService
      .getMoviesByCategories(10749)
      .then(res => {
        this.setState({ romance: res.data });
      })
      .catch(err => console.log(err));
  }

  changeText(value) {
    this.setState({ search: value });
}

  search() {
    AsyncStorage.setItem('search', this.state.search)
    .then(() => {      
        this.props.navigation.navigate('SearchList');
    })
    .catch((err) => {
        alert(err);
    }); 
  }

  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <ScrollView>
          <Text>Catégories</Text>
          <TextInput onChangeText={(text) => this.changeText(text)} placeholder="Entrer le nom de film"></TextInput>
          <Button style={{width : 10}} title="Rechercher" onPress={() => this.search()}/>
          <View>
            <Text style={styles.categories}>Comédie :</Text>
            <ScrollViewComponent
              movies={this.state.comedies}
            ></ScrollViewComponent>

            <Text style={styles.categories}>Action :</Text>
            <ScrollViewComponent
              movies={this.state.action}
            ></ScrollViewComponent>

            <Text style={styles.categories}>Documentaires :</Text>
            <ScrollViewComponent
              movies={this.state.documentaries}
            ></ScrollViewComponent>

            <Text style={styles.categories}>Romance :</Text>
            <ScrollViewComponent
              movies={this.state.romance}
            ></ScrollViewComponent>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: "50%",
    backgroundColor: "black",
    marginLeft: "25%",
    marginVertical: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  textLogo: {
    fontFamily: "open-sans",
    color: "white",
    fontSize: 20
  },
  categories: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
    color: "black",
    marginLeft: 5
  }
});

const mapStateToProps = stateStore => {
  return {
    tmdbService: stateStore.serviceReducer.tmdbService
  };
};

export default withNavigation(connect(mapStateToProps)(SearchScreen));
