import React from 'react';
import {
  HomeScreen,
  FavoriteAndWatchedMoviesScreen,
  SettingsScreen,
  SearchScreen
} from '../screens';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';

const tabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Accueil',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-home'} />
        )
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-search'} />
        )
      }
    },
    FavoritesAndWatched: {
      screen: FavoriteAndWatchedMoviesScreen,
      navigationOptions: {
        tabBarLabel: 'Favoris/Vus',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-star'} />
        )
      }
    }
    // Settings: {
    //     screen: SettingsScreen,
    //     navigationOptions: {
    //         tabBarLabel: 'Paramètres',
    //         tabBarIcon: ({ tintColor }) => (
    //             <Icon color={tintColor} size={25} name={'ios-settings'} />
    //         ),
    //         barStyle: { backgroundColor: 'red' }
    //     }
    // },
  },
  {
    initialRouteName: 'Home'
  }
);

export default tabNavigator;
