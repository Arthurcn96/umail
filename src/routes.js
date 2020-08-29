import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Pack from './pages/Pack';

export default function Routes() {
  return(
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false}}>
      <AppStack.Screen name= "Pack" component={Pack} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}
