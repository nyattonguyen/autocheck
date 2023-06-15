import React from 'react';
import {Box, NativeBaseProvider, Text, Center, Button} from 'native-base';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import HomeInfo from '../components/HomeInfo';
import Colors from '../color';
import {useNavigation} from '@react-navigation/native';
import { useState } from 'react';
const {width, height} = Dimensions.get('window');

export default function FirstScreen(props) {
  const navigation = useNavigation();
  const [active, setActive] = useState(true);

  const handlePress = () => {
    setActive(!active);
    console.log(active)
    navigation.navigate('Register')
  };

  return (
    <View style={styles.container}>
      <Box flex={1}  >
        <Center mt={400}>
        <HomeInfo />
        </Center>

        <Center marginBottom={100}>
          <Button
            style={ active ? styles.btn : styles.btnActive }
            onPress={() => handlePress()}>
            <Text style={ active ? styles.text: styles.textAvtive}>Bắt đầu</Text>
          </Button>
        </Center>
      </Box>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: width,
    height: height
  },
  btn: {
    width: 200,
    height: 50,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.orange,
    borderRadius: 10,
    fontWeight: '500',
    shadowOffset: {width: -2, height: 4},
    shadowColor: Colors.red,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    zIndex:2
  },
  btnFc: {
    backgroundColor: Colors.main,
  },
  btnActive: {
    width: 200,
    height: 50,
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black,
    borderRadius: 10,
    fontWeight: '500',
    shadowOffset: {width: -2, height: 4},
    shadowColor: Colors.red,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 20,
    zIndex:2, 
    color: Colors.white,
  },
  text: {
    fontSize: 20,
    color: Colors.black
  },
  textAvtive: {
    fontSize: 20,
    color: Colors.white
  }
});
