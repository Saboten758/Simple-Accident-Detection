import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import Home from "../Screens/HomePage";
import Danger from '../Screens/Danger';
import Main from '../Screens/MainPage';
const Stack=createNativeStackNavigator()

const Root=()=>{
    
    return(
        <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
        <Stack.Screen  name="Main" component={Main}/>
        <Stack.Screen  name="Home" component={Home}/>
        <Stack.Screen name="Danger" component={Danger}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Root