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
} from 'react-native';
import thietbi from './getid';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  useSharedValue,
  runOnJS,
  useDerivedValue,
  useAnimatedReaction,
} from 'react-native-reanimated';
//import { render } from 'react-dom';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  camera: {
    width: width,
    height: height,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
const Dangky = ({navigation}) => {
  thietbi().then(id => {
    console.log(navigation);
    fetch('http://localhost:9090/sinhvien/dangnhap/' + id)
      .then(response => response.json())
      .then(json => {
        console.log(json);
      });
  });
};

export default Dangky;
