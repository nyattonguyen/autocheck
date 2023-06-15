import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Dimensions, StyleSheet, View} from 'react-native';

import NotSubmiteExer from './NotSubmiteExer';
import SubmitedExer from './SubmitedExer';
import Colors from '../../color';

const Stack = createMaterialTopTabNavigator();


function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: Colors.black,
        },
      }}>
      <Stack.Screen
        options={{
          tabBarPressColor: Colors.orange,
          tabBarActiveTintColor: Colors.black,
          tabBarPressOpacity: Colors.red,
        }}
        name="Chưa nộp"
        component={NotSubmiteExer}
      />
      <Stack.Screen
        options={{
          tabBarPressColor: Colors.orange,
          tabBarActiveTintColor: Colors.black,
          tabBarPressOpacity: Colors.red,
        }}
        name="Đã nộp"
        component={SubmitedExer}
      />
    </Stack.Navigator>
  );
}

export default function MainExercise() {
  return <MyStack />;
}
