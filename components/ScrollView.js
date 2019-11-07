import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ImgMovie } from '../components';

class Scrollview extends React.Component {
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity>
            <ImgMovie
              image={
                'http://fr.web.img5.acsta.net/pictures/19/04/04/17/52/0652795.jpg'
              }
            />
          </TouchableOpacity>

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
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default Scrollview;
