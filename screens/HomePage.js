import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ImgMovie from '../components/ImgMovie';

class HomePage extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.logo}>
          <Text style={styles.textLogo}>LOGO</Text>
        </View>
        <Text style={styles.categories}>Populaire</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.categoryContainer}>
            <ImgMovie
              image={
                'http://fr.web.img5.acsta.net/pictures/19/04/04/17/52/0652795.jpg'
              }
            />
            <ImgMovie
              image={
                'http://www.filmsquebec.com/wp-content/uploads/2013/04/secret-de-jerome.jpg'
              }
            />
            <ImgMovie
              image={
                'https://media.senscritique.com/media/000000150071/source_big/Bastien_Bastienne.jpg'
              }
            />
            <ImgMovie
              image={
                'http://t0.gstatic.com/images?q=tbn:ANd9GcQzX-5nDWw-_V1mEaNgDgHDdozTyRCu6T6XAh4E7CjtjhAMKXzW'
              }
            />
            <ImgMovie
              image={
                'http://t0.gstatic.com/images?q=tbn:ANd9GcQzX-5nDWw-_V1mEaNgDgHDdozTyRCu6T6XAh4E7CjtjhAMKXzW'
              }
            />
            <ImgMovie
              image={
                'http://t0.gstatic.com/images?q=tbn:ANd9GcQzX-5nDWw-_V1mEaNgDgHDdozTyRCu6T6XAh4E7CjtjhAMKXzW'
              }
            />
          </View>
        </ScrollView>

        {/* <Button
          title='Go to All movies'
          onPress={() => {
            this.props.navigation.navigate('AllMovies');
          }}></Button> */}
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
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default HomePage;
