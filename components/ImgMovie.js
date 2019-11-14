import React from 'react';
import { Image, StyleSheet } from 'react-native';

class ImgMovie extends React.Component {
  render() {
    return (
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w185${this.props.imageUrl}`
        }}></Image>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImgMovie;
