/**
 * Brew Me app
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HomeScreen } from './app/views/HomeScreen'
import { RecipesScreen } from './app/views/RecipesScreen'
import { RecipeDetailScreen } from './app/views/RecipeDetailScreen'
import { HistoryScreen } from './app/views/HistoryScreen'
import { EquipmentScreen } from './app/views/EquipmentScreen'
import { Header } from './app/views/Header';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Recipes: RecipesScreen,
    Recipe: RecipeDetailScreen,
    History: HistoryScreen,
    Equipment: EquipmentScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <AppContainer />
      </View>
    );
  }
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    marginTop: 0,
    flex: 1
  },
  body: {
    backgroundColor: Colors.white,
    flex: 6
  },
  highlight: {
    fontWeight: '700',
  },
});

