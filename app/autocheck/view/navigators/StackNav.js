import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="First" component={FirstScreen} /> */}
      {/* <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} /> */}

      {/* <Stack.Screen name="AutoCheck" component={AutoCheckScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} /> */}
    </Stack.Navigator>
  );
};
export default StackNav;
