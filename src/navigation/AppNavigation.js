import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactList from '../screens/ContactList';

import COLORS from '../utils/color';

const Stack = createStackNavigator();

const AppNavigator = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator
       initialRouteName={"ContactList"} 
       screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.ThemeColor,
        },
        headerTitleAlign:'center',
        headerTintColor: COLORS.White,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="ContactList" component={ContactList}  options={{headerShown: true, title:"Contact List" }} />  
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
