import React from 'react';
import {
  Text,
  Center,
  Box,
  NativeBaseProvider,
  View,
  Image,
  FlatList,
  HStack,
  VStack,
  Spacer,
} from 'native-base';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Colors from '../color';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {sinhvienDangxuat} from '../context/actions/Auth.action';
import LinearGradient from 'react-native-linear-gradient';
import { useContext } from 'react';
import AuthGlobal from '../context/store/AuthGlobal';

const {width, height} = Dimensions.get('window');

export default function SettingScreen(props) {
  const navigation = useNavigation();
  const context = useContext(AuthGlobal);
  return (
    <LinearGradient colors={['#111013', '#060505', '#171f33', '#111013']}>
      <Box
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.boxInfo}>
          <Box style={styles.imgUser}>
            <Image
              source={{
                uri: 'https://images.pexels.com/photos/8566437/pexels-photo-8566437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
              alt="imgUser"
              size="xl"
              borderWidth={4}
              borderColor={Colors.white}
              borderRadius={100}
            />
          </Box>
          <Box
            mt={-10}
            marginLeft={10}
            marginRight={10}
            width={width - 60}
            height={height - 400}
            borderRadius={30}
            overflow="hidden"
            alignItems="center"
            borderWidth={2}
            borderColor={Colors.main}
            background={Colors.white}
            style={styles.boxMain}>
            <TouchableOpacity
              style={styles.btnSetting}
              onPress={() => navigation.navigate('ProfileUser')}>
              <Icon color={Colors.black} size={22} name="user" />
              <Text style={styles.titleSetting}>Hồ sơ cá nhân</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSetting}
              onPress={() => navigation.navigate('HistoryCheck')}>
              <Icon color={Colors.black} size={22} name="th-list" />
              <Text style={styles.titleSetting}>Lịch sử điểm danh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnSetting}
              onPress={() => [
                AsyncStorage.removeItem('sinhvien'),
                context.sinhvien = null,
                //sinhvienDangxuat(context.dispatch),
                navigation.navigate('Login')
              ]}>
              <Icon color={Colors.black} size={22} name="external-link" />
              <Text style={styles.titleSetting}>Đăng xuất</Text>
            </TouchableOpacity>
          </Box>
        </View>
      </Box>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  boxInfo: {
    width: '80%',
    height: height,
    backgroundColor: 'transparent',
    alignItems: 'center',
    position: 'relative',
  },
  imgUser: {
    width: 150,
    height: 150,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 4,
  },
  btnSetting: {
    width: width - 100,
    height: 50,
    borderBottomWidth: 2,
    justifyContent: 'center',
    borderColor: Colors.black,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 50,
    marginBottom: 10,
  },
  boxMain: {
    shadowColor: Colors.main,
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 20,
    overflow: 'hidden',
  },
  titleSetting: {
    fontSize: 18,
    paddingLeft: 30,
    marginTop: -24,
    marginLeft: 8,
  },
});
