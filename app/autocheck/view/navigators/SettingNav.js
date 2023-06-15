import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from '../screens/SettingScreen';
import ProfileUser from '../screens/ProfileUser';
import EditProfile from '../screens/EditProfile';
import Colors from '../color';
import HistoryScreen from '../screens/HistoryScreen';
import ChangePassword from '../screens/ChangePassword';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="ProfileUser"
        component={ProfileUser}
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
        name="Change Password"
        component={ChangePassword}
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
        name="HistoryCheck"
        component={HistoryScreen}
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

export default function SettingNav() {
  return <MyStack />;
}
