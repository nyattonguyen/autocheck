import React, {useRef, useEffect, useContext} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {Text, Center, Box, NativeBaseProvider} from 'native-base';
import Colors from '../color';
import AuthGlobal from '../context/store/AuthGlobal';

export default function HomeInfo(props, thongtinsinhvien) {
  const {width, height} = Dimensions.get('window');
  const context = useContext(AuthGlobal);
  const name = context.sinhvien.hoten || "";
  const nameTrim = name.trim();
  const words = nameTrim.split(" ");
  const lastWord = words[words.length - 1];
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        position: 'absolute',
      }}>
      <Center>
        <Image
          source={require('../assets/img/logomain.png')}
          alt="logo"
          size="xxl"
          w={30}
          h={40}
          mt={20}
        />
      </Center>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <Text fontSize={24} color={Colors.main} bold w={width - 30}>
          Xin chào <Text color={Colors.white}>{lastWord } </Text> đến với AutoCheck
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imglogo: {
    width: 60,
    height: 60,
  },
});
