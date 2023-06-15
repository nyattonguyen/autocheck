import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Colors from '../color';

const Error = props => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{props.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: Colors.red,
    fontSize: 16,
  },
});

export default Error;
