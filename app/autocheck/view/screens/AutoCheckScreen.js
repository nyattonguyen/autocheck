import React from 'react';
import {Text, Center, View, Box} from 'native-base';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../color';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const {height, width} = Dimensions.get('window');
export default function AutoCheckScreen() {
  const navigation = useNavigation();
  const handleOpenCam = () => {
    navigation.navigate('XacThuc');
  };

  return (
    <LinearGradient
      colors={['#04050b', '#171f33', '#111013']}
      style={styles.container}>
      <Toast />
      <View style={styles.body}>
        <TouchableOpacity style={styles.boxCamera} onPress={handleOpenCam}>
          <Box style={styles.btnamera}>
            <Icon name="camera" style={styles.icon}></Icon>
          </Box>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    opacity: 0.5,
    width: width - 40,
    height: height - 120,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderRadius: 30,
    borderColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 16,
  },
  boxCamera: {
    display: 'flex',
    width: 80,
    height: 80,
    backgroundColor: Colors.white,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderColor: Colors.main,
    borderRadius: 40,
    zIndex: 3,
  },
  icon: {
    fontSize: 30,
    color: Colors.white,
    zIndex: 4,
  },
});
