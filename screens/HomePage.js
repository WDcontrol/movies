import React from 'react';
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import {ScrollViewComponent} from '../components';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';

class HomePage extends React.Component {
  state={
    topRatedMovies:[],
    UpcomingMovies:[],
    NowPlayingOnTheatherMovies:[],
    PopularMovies:[],

    popularTV:[],
    topRatedTV:[],
  }

  componentDidMount(){
    this.props.tmdbService.getTopRatedMovies().then((res)=>{
        let arr = []
        arr.push(res.data)
        this.setState({topRatedMovies: res.data})
    }).catch((err)=>console.log(err))
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
            <ScrollViewComponent movies={this.state.topRatedMovies}></ScrollViewComponent>

            <Text style={styles.categories}>Films à venir</Text>
            <ScrollViewComponent movies={this.state.upcomingMovies}></ScrollViewComponent>

            <Text style={styles.categories}>Films au cinéma actuellement</Text>
            <ScrollViewComponent></ScrollViewComponent>

            <Text style={styles.categories}>Films populaires</Text>
            <ScrollViewComponent></ScrollViewComponent>

            <Text style={styles.categories}>Séries populaires</Text>
            <ScrollViewComponent></ScrollViewComponent>

            <Text style={styles.categories}>Séries les mieux notées</Text>
            <ScrollViewComponent></ScrollViewComponent>

            <Text style={styles.categories}>Acteurs populaires</Text>
            <ScrollViewComponent></ScrollViewComponent>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: '50%',
    backgroundColor: 'black',
    marginLeft: '25%',
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textLogo: {
    fontFamily: 'open-sans',
    color: 'white',
    fontSize: 20
  },
  categories: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: 'black',
    marginLeft: 5
  }
});

const mapStateToProps = (stateStore) => {
  return ({
      tmdbService: stateStore.serviceReducer.tmdbService
  });
}

export default withNavigation(connect(mapStateToProps)(HomePage));
