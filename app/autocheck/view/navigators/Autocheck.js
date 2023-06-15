import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from '../color';
import Camera from '../../control/camera';
import AutoCheck from '../screens/AutoCheckScreen';
import Diemdanh from '../../control/dinhvi';
import XacThuc from '../../control/fing';
import Test from '../screens/Test';
const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auto"
        component={AutoCheck}
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
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DiemDanh"
        component={Diemdanh}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Test"
        component={Test}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="XacThuc"
        component={XacThuc}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function SettingNav() {
  return <MyStack />;
}
