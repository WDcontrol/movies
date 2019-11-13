import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { ImgMovie } from '../components';
import { connect } from 'react-redux';

class FavoriteAndWatchedMoviesScreen extends React.Component {
  render() {
    console.log('favmovies', this.props.favorites);
    return (
      <View style={{ marginTop: 40 }}>
        <ScrollView>
          <Text>Favories</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={this.props.favorites}
            renderItem={({ item }) => (
              <View style={styles.imgContainer}>
                {console.log('the item', item)}
                <TouchableOpacity>
                  <ImgMovie imageUrl={item.poster_path}></ImgMovie>
                </TouchableOpacity>
              </View>
            )}
          />
          {/* <View>
            <Text style={styles.categories}>Favories</Text>
            <ScrollViewComponent
              movies={this.props.favorites}></ScrollViewComponent>
            <Text style={styles.categories}>A voir</Text>
            <ScrollViewComponent></ScrollViewComponent>
          </View> */}
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
    favorites: stateStore.favoritesAndWatchedReducer.favorites
  };
};

export default connect(mapStateToProps)(FavoriteAndWatchedMoviesScreen);
