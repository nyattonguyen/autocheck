import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import RegisterScreen from '../screens/RegisterScreen';

import Colors from '../color';
import LoginScreen from '../screens/LoginScreen';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>

    <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
          headerTitle: '',
          
        }}
      />
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Bottom"
          component={BottomNav}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: Colors.gray,
            borderBottomWidth: 1,
            borderColor: Colors.orange,
            shadowColor: Colors.orange,
            shadowOffset: {
              width: 1,
              height: 8,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 20,
          },
        }}
      />
      
    </Stack.Navigator>
  );
}

export default function StackFirst() {
  return <MyStack />;
}
