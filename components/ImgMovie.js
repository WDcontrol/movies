import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

class ImgMovie extends React.Component {
  render() {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: this.props.image }}></Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 180,
    width: 120,
    marginHorizontal: 5,
    marginVertical: 10
  },
  image: {
    width: '100%',
    height: '100%'
  }
});

export default ImgMovie;
