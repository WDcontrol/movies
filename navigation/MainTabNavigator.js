import React from 'react';
import {
  HomePage,
  FavoriteAndWatchedMoviesScreen,
  SearchScreen,
  MovieDetailScreen
} from '../screens';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import SearchListScreen from '../screens/SearchListScreen';

const HomeStackNavigator = createStackNavigator(
  {
    Home: HomePage,
    MovieDetail: MovieDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: ''
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      },
      headerTintColor: 'black'
    }
  }
);

const SearchStackNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    MovieDetail: MovieDetailScreen,
    SearchList: SearchListScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: ''
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      },
      headerTintColor: 'black'
    }
  }
);


const FavoriteAndWatchedStackNavigatorvigator = createStackNavigator(
  {
    FavoriteAndToWatch: FavoriteAndWatchedMoviesScreen,
    MovieDetail: MovieDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: ''
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      },
      headerTintColor: 'white'
    }
  }
);

const tabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Accueil',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-home'} />
        )
      }
    },
    Search: {
      screen: SearchStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarIcon: ({ tintColor }) => (
          <Icon color={tintColor} size={25} name={'ios-search'} />
        )
      }
    },
    FavoritesAndWatched: {
      screen: FavoriteAndWatchedStackNavigatorvigator,
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
    initialRouteName: 'Home',
    barStyle: { backgroundColor: 'white' }
  }
);

export default tabNavigator;
