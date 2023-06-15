import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../color';
import MainExercise from '../screens/survey/MainExercise';
import MainSurvey from '../screens/survey/MainSurvey';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main Exer"
        component={MainExercise}
        options={{
          headerShown: false,
          headerTitle: false,
          header: false,
        }}
      />

      <Stack.Screen
        name="Main Survey"
        component={MainSurvey}
        options={{
          headerShown: false,
          headerTitle: false,
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

export default function SurveyNav() {
  return <MyStack  />;
}
