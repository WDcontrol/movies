import React from 'react';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from '../screens/HomePage';
import AllMoviesScreen from '../screens/AllMoviesScreen';
import FavoriteMoviesScreen from '../screens/FavoriteMoviesScreen';

// const AppNavigator = createStackNavigator(
//     {
//       Home: HomePage,
//       AllMovies: AllMoviesScreen,
//       MovieDetail: MovieDetailScreen
//     },
//     {
//       defaultNavigationOptions: {
//         headerStyle: {
//           backgroundColor: ''
//         },
//         headerTitleStyle: {
//           fontFamily: 'open-sans-bold'
//         },
//         headerBackTitleStyle: {
//           fontFamily: 'open-sans'
//         },
//         headerTintColor: 'red'
//       }
//     }
//   );

  const tabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-home'} />
                )
            }
        },
        Movies: {
            screen: AllMoviesScreen,
            navigationOptions: {
                tabBarLabel: 'Movies',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-star'} />
                )
            }
        },
        FavoriteMoviesScreen: {
            screen: FavoriteMoviesScreen,
            navigationOptions: {
                tabBarLabel: 'Favorites',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-settings'} />
                ),
                barStyle: { backgroundColor: 'grey' }
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

  export default tabNavigator;