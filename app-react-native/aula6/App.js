import React from 'react';
//Import para naevgação
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

//Como Importar ecrãs
import Login from "./pages/Login"
import Register from "./pages/Register"

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
