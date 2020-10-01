import React from 'react';
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import HomePage from "./src/screens/HomePage"

const stack = createStackNavigator();

function app(){
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Home" component ={HomePage}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}


export default app;