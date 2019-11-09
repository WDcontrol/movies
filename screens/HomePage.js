import React from "react";
import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
import { ScrollViewComponent } from "../components";
import { connect } from "react-redux";
import { withNavigation } from "react-navigation";

class HomePage extends React.Component {
  state = {
    topRatedMovies: [],
    upcomingMovies: [],
    nowPlayingOnTheatherMovies: [],
    popularMovies: [],

    popularTvShow: [],
    topRatedTvShow: []
  };

  componentDidMount() {
    this.props.tmdbService
      .getTopRatedMovies()
      .then(res => {
        this.setState({ topRatedMovies: res.data });
      })
      .catch(err => console.log(err));

    this.props.tmdbService
      .getUpcomingMovies()
      .then(res => {
        this.setState({ upcomingMovies: res.data });
      })
      .catch(err => console.log(err));

    this.props.tmdbService
      .getNowPlayingOnTheatherMovies()
      .then(res => {
        this.setState({ nowPlayingOnTheatherMovies: res.data });
      })
      .catch(err => console.log(err));

    this.props.tmdbService
      .getPopularMovies()
      .then(res => {
        this.setState({ popularMovies: res.data });
      })
      .catch(err => console.log(err));

    this.props.tmdbService
      .getPopularTvShow()
      .then(res => {
        this.setState({ popularTvShow: res.data });
      })
      .catch(err => console.log(err));

    this.props.tmdbService
      .getTopRatedTvShow()
      .then(res => {
        this.setState({ topRatedTvShow: res.data });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <View>
        <ScrollView>
          <View style={styles.logo}>
            <Text style={styles.textLogo}>LOGO</Text>
          </View>
          <View>
            <Text style={styles.categories}>Films les mieux notés</Text>
            <ScrollViewComponent
              movies={this.state.topRatedMovies}
            ></ScrollViewComponent>

            <Text style={styles.categories}>Films à venir</Text>
            <ScrollViewComponent
              movies={this.state.upcomingMovies}
            ></ScrollViewComponent>

            <Text style={styles.categories}>Films au cinéma actuellement</Text>
            <ScrollViewComponent
              movies={this.state.nowPlayingOnTheatherMovies}
            ></ScrollViewComponent>

            <Text style={styles.categories}>Films populaires</Text>
            <ScrollViewComponent
              movies={this.state.popularMovies}
            ></ScrollViewComponent>

            <Text style={styles.categories}>Séries populaires</Text>
            <ScrollViewComponent
              movies={this.state.popularTvShow}
              typeOfContent={1} // TV show
            ></ScrollViewComponent>

            <Text style={styles.categories}>Séries les mieux notées</Text>
            <ScrollViewComponent
              movies={this.state.topRatedTvShow}
              typeOfContent={1} // TV show
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

export default withNavigation(connect(mapStateToProps)(HomePage));
