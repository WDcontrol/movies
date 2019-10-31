import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import AllMoviesScreen from '../screens/AllMoviesScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import HomePage from '../screens/HomePage';

const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    AllMovies: AllMoviesScreen,
    MovieDetail: MovieDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black'
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans'
      },
      headerTintColor: 'red'
    }
  }
);

export default createAppContainer(AppNavigator);
