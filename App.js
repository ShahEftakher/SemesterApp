import React from 'react';
import {NavigationContainer, StackActions} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import HomePage from "./src/screens/HomePage"
import ProfilePage from "./src/screens/ProfilePage"
import SemesterPage from "./src/screens/SemesterPage"
import FacultyPage from "./src/screens/FacultyPage"

const stack = createStackNavigator();

function app(){
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName="Home">
        <stack.Screen name="Home" component ={HomePage}></stack.Screen>
        <stack.Screen name="Profile" component ={ProfilePage}></stack.Screen>
        <stack.Screen name="Semesters" component ={SemesterPage}></stack.Screen>
        <stack.Screen name="Faculty Members" component ={FacultyPage}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
}


export default app;