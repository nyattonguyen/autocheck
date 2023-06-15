import React, {useContext, useEffect, useState} from 'react';
import {Box, Image, Input, Text} from 'native-base';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Colors from '../color';
//navigation
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import baseURL from '../common/baseURL';
import AuthGlobal from '../context/store/AuthGlobal';
import Toast from 'react-native-toast-message';

const {width, height} = Dimensions.get('window');

export default function ChangePassword() {
  const context = useContext(AuthGlobal);
  const data = context.sinhvien;
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorr, setErrorr] = useState(false);
  const [log, setLog] = useState('');
  const [active, setActive] = useState(false);
  // let dropDownAlertRef = useRef();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleUpdatePS = () => {
    if (password == '' || newPassword == '' || confirmPassword == '') {
      setErrorr(true);
      setLog('Bạn hãy điền đầy đủ thông tin !');
      return;
    } else if (password !== data.password) {
      setErrorr(true);
      setLog('Bạn chưa điền đúng mật khẩu !');
      return;
    } else if (newPassword !== confirmPassword) {
      setErrorr(true);
      setLog('Mật khẩu bạn nhập lại không đúng với mật khẩu mới!');
      return;
    }
    const info = {
      matkhaucu: password,
      matkhaumoi: newPassword,
      nhaplaimatkhaumoi: confirmPassword,
    };
    console.log(data.id)
    fetch(`${baseURL}/sinhvien/thaydoimatkhau/${data.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(info),
    })
      .then(res => res.json())
      .then(res => {
          setErrorr(false);
          Toast.show({
            topOffset: 60,
            type: 'success',
            text1: 'Cập nhật thành công',
            text2: '',
          });
          setTimeout(() => {
            navigation.navigate('ProfileUser');
          }, 500);
      })
      .catch(err => {
        Toast.show({
          topOffset: 60,
          type: 'error',
          text1: 'Xảy ra lỗi',
          text2: 'Hãy thử lại sau ',
        });
        console.log(err);
      });
  };

  return (
      <LinearGradient
        colors={['#111013', '#171f33', '#111013', '#635f5f']}
        style={styles.container}>
      <Toast />
        <TouchableOpacity style={styles.btnBack} onPress={handleBack}>
          <Icon
            name="ios-chevron-back-outline"
            size={26}
            color={Colors.white}
          />
        </TouchableOpacity>
        <View style={{width: width, height: height}}>
          <Box flex={1} mt={-10}>
            <View style={styles.container}>
              <View style={styles.header}>
                <Box style={styles.imgUser}>
                  <Image
                    source={require('../assets/img/AUtocheck.png')}
                    alt="logo"
                    style={styles.imgLogo}
                  />
                </Box>
              </View>
              <View>
                <View style={styles.itemUser}>
                  <View style={styles.boxH}>
                    <Icon
                      name="information-circle-outline"
                      size={22}
                      style={styles.iconHeader}
                    />

                    <Text style={styles.heading}>Điền thông tin của bạn</Text>
                  </View>
                </View>

                <View style={styles.formInfo}>
                  <ScrollView>
                    {errorr ? (
                      <Text style={{color: Colors.red, fontSize: 16}}>
                        {log}
                      </Text>
                    ) : (
                      ''
                    )}
                    <Box style={styles.inputItem}>
                      <View style={styles.itemUser}>
                        <Icon
                          style={styles.icon}
                          name="keypad-outline"
                          size={20}
                        />
                        <Text> Mật khẩu cũ:</Text>
                      </View>
                      <Input
                        style={styles.text1}
                        placeholder="***************"
                        type="password"
                        onChangeText={e => setPassword(e)}
                      />
                    </Box>
                    <Box style={styles.inputItem}>
                      <View style={styles.itemUser}>
                        <Icon
                          style={styles.icon}
                          name="keypad-outline"
                          size={20}
                        />
                        <Text> Mật khẩu mới:</Text>
                      </View>
                      <Input
                        style={styles.text1}
                        placeholder="***************"
                        type="password"
                        onChangeText={e => setNewPassword(e)}
                      />
                    </Box>
                    <Box style={styles.inputItem}>
                      <View style={styles.itemUser}>
                        <Icon
                          style={styles.icon}
                          name="keypad-outline"
                          size={20}
                        />
                        <Text> Nhập lại mật khẩu:</Text>
                      </View>
                      <Input
                        style={styles.text1}
                        placeholder="***************"
                        type="password"
                        onChangeText={e => setConfirmPassword(e)}
                      />
                    </Box>

                    <TouchableOpacity
                      style={styles.btnOK}
                      onPress={handleUpdatePS}>
                      <Text style={styles.titleBtn}>Xác nhận</Text>
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </View>
            </View>
          </Box>
        </View>
      </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.white,
  },
  formInfo: {
    width: width - 40,
    height: height - 380,
    backgroundColor: Colors.white,
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 25,
    borderRadius: 20,
    shadowColor: Colors.main,
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgUser: {
    width: 150,
    height: 150,
    marginTop: 0,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputItem: {
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 4,
  },
  itemUser: {
    flexDirection: 'row',
  },
  boxH: {
    height: 40,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: Colors.deepGray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 20,
  },
  text1: {
    fontSize: 16,
    margin: 10,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 36,
    color: Colors.black,
  },
  icon: {
    marginTop: 2,
  },
  iconHeader: {
    fontWeight: '500',
    marginRight: 4,
    color: Colors.main,
  },
  btnOK: {
    backgroundColor: Colors.white,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    width: 200,
    borderRadius: 40,
    borderWidth:2,
    borderColor: Colors.main,
    alignItems: 'center',
    shadowColor: Colors.main,
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  titleBtn: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '400',
  },
  btnBack: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgLogo: {
    width: 300,
    height: 300,
  },
});
