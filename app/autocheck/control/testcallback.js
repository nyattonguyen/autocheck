import {Pressable, Text, View} from 'native-base';
import React, {useState, useRef} from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../view/color';
import thietbi from './getid';
import {render} from 'react-dom';
import {createRoot} from 'react-dom/client';
import {useNavigation} from '@react-navigation/native';

export default function Testcallback() {
  const ExampleContext = React.createContext();

  function Callback(data) {
    var context = React.useContext(ExampleContext);
    return <Text>{id}</Text>;
  }

  const [id, setId] = useState('');
  thietbi(setId).then(id => {
    console.log(id);
  });
  return (
    <ExampleContext.Provider value={id}>
      <Callback />
    </ExampleContext.Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    color: Colors.red,
    fontSize: 20,
    marginTop: 100,
  },
});
