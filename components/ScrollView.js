import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ImgMovie } from '../components';

class Scrollview extends React.Component {
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity>
            <View style={styles.imgContainer}>
              <ImgMovie
                image={
                  'http://fr.web.img5.acsta.net/pictures/19/04/04/17/52/0652795.jpg'
                }
              />
            </View>
          </TouchableOpacity>
          <View style={styles.imgContainer}>
            <ImgMovie
              image={
                'http://www.filmsquebec.com/wp-content/uploads/2013/04/secret-de-jerome.jpg'
              }
            />
          </View>
          <View style={styles.imgContainer}>
            <ImgMovie
              image={
                'https://media.senscritique.com/media/000000150071/source_big/Bastien_Bastienne.jpg'
              }
            />
          </View>
          <View style={styles.imgContainer}>
            <ImgMovie
              image={
                'http://t0.gstatic.com/images?q=tbn:ANd9GcQzX-5nDWw-_V1mEaNgDgHDdozTyRCu6T6XAh4E7CjtjhAMKXzW'
              }
            />
          </View>
          <View style={styles.imgContainer}>
            <ImgMovie
              image={
                'http://t0.gstatic.com/images?q=tbn:ANd9GcQzX-5nDWw-_V1mEaNgDgHDdozTyRCu6T6XAh4E7CjtjhAMKXzW'
              }
            />
          </View>
          <View style={styles.imgContainer}>
            <ImgMovie
              image={
                'http://t0.gstatic.com/images?q=tbn:ANd9GcQzX-5nDWw-_V1mEaNgDgHDdozTyRCu6T6XAh4E7CjtjhAMKXzW'
              }
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgContainer: {
    height: 180,
    width: 120,
    marginHorizontal: 5,
    marginVertical: 10
  }
});

export default Scrollview;
