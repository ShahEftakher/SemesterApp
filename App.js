import React from 'react';
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import HomePage from "./src/screens/HomePage"
import ProfilePage from "./src/screens/ProfilePage"

const stack = createStackNavigator();

function app(){
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component ={HomePage}></stack.Screen>
        <stack.Screen name="Profile" component ={ProfilePage}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}


export default app;