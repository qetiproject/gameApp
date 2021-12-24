import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Game from './components/game'
import GameListItemDetail from './components/gameListItemDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Game} />
        <Stack.Screen name="GameDetail" component={GameListItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}