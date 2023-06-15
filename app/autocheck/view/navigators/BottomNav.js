import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Colors from '../color';

import Icon from 'react-native-vector-icons/FontAwesome';
import Iconn from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import SettingNav from './SettingNav';
import SurveyNav from './SurveyNav';
import Autocheck from '../navigators/Autocheck';
import {useState} from 'react';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const [showBottom, setShowBottom] = useState(true);
  
  
  return (
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: {
          paddingtop: 48,
          marginBottom: 20,
          position: 'absolute',
          borderRadius: 40,
          marginRight: 4,
          marginLeft: 4,
          backgroundColor: Colors.white,
          opacity: 0.8,
        },
        headerShown: false,
        tabBarLabelStyle: {fontWeight: 'bold'},
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />
      <Tab.Screen
        name="Autocheck"
        component={Autocheck}
        options={{
          tabBarLabel: 'Auto',
          tabBarIcon: ({color}) => (
            <Iconn name="camera-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Survey"
        component={SurveyNav}
        options={{
          tabBarLabel: 'Survey',
          tabBarIcon: ({color}) => (
            <Icon name="newspaper-o" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingNav}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <Iconn name="settings-sharp" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    )
};

export default BottomNav;
