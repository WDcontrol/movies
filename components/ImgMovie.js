import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

class ImgMovie extends React.Component {
  render() {
    return (
      <Image style={styles.image} source={{ uri: this.props.image }}></Image>
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
