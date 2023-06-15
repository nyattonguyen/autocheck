import React, {useState, useCallback} from 'react';
import type {Node} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
      <Button
        title="Open"
        onPress={() =>
          navigation.push('ScanCamera')
        }
      />
    );
  };
  export default HomeScreen;