import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import {ImgMovie} from '../components';
import {connect} from 'react-redux';
import TMDBService from '../services/tmdb-service';

class Scrollview extends React.Component{

    onImgPress(){
        this.props.navigation.navigate('');
    }

    render(){
        return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categoryContainer}>

          </View>
        </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

export default Scrollview