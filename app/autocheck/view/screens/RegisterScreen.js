import React, {useEffect, useState} from 'react';
import {
  Box,
  Center,
  Heading,
  HStack,
  Input,
  NativeBaseProvider,
  ScrollView,
  Spacer,
  Text,
  VStack,
} from 'native-base';
import Colors from '../color';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Error from '../components/Error';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from "react-native-toast-message";

import {useNavigation} from '@react-navigation/native';
import {useContext} from 'react';
import AuthGlobal from '../context/store/AuthGlobal';
import LinearGradient from 'react-native-linear-gradient';
import baseURL from '../common/baseURL';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';


const {width, height} = Dimensions.get('window');


export default function RegisterScreen(props, thongtinsinhvien) {
  // ==============================================================
  
  const context = useContext(AuthGlobal);
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hoten, setTen] = useState('');
  const [lop, setLop] = useState('');
  const [mssv, setMssv] = useState('');
  const [mathietbi, setMaThietBi] = useState('');
  const [error, setError] = useState('');
  const [data, setData] = useState('');
  const [isPressed, setIsPressed] = useState(false);
  const [ngaysinh, setNgaySinh] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false)
  console.log(ngaysinh);
  
  const handleSubmit = () => {
    var sinhVien = {
      email: email,
      password: password,
      lop: lop,
      hoten: hoten,
      maso: mssv,
      ngaysinh: ngaysinh,
      mathietbi: mathietbi,
    };
    console.log('sv resit', sinhVien);
    if (
      email === '' ||
      password === '' ||
      lop === '' ||
      hoten === '' ||
      mssv === '' ||
      ngaysinh === ''
    ) {
      setError('Bạn hãy điền đầy đủ thông tin');
      return;
    } else {
      fetch(`${baseURL}/sinhvien/dangky`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sinhVien),
      })
        .then(response => response.json())
        .then(json => {
          if(json.error)
          return; 
          //context.sinhvien = json;
          console.log('sv dang ky', json);
          //savekey('sinhvien', json);
          //setData(json);
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Đăng kí thành công",
            text2: "",
          });
          setTimeout(() => {
            navigation.navigate('Login');
          }, 500);
        })
        .catch(error => { 
          Toast.show({
            topOffset: 60,
            type: "error",
            text1: "Xảy ra lỗi",
            text2: "Hãy thử lại sau ",
          });
          console.log(error)});
    }
  }

  const handleClickLogin = () => {
    navigation.navigate('Login');
  }
  
  useEffect(() => {
    const handlePress = () => {
      setIsPressed(!isPressed);
    };
  },[])
  return (
    <LinearGradient
      colors={['#111013', '#060505', '#171f33', '#000000']}
      flex={1}
      bg={Colors.subGreen}
      style={styles.container}>
      <Toast />
      <View style={[{top: 0}, styles.boxH]}>
        <Heading
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 10,
            fontSize: 20,
            color: Colors.white
          }}>
          Hãy nhập thông tin của bạn
        </Heading>
      </View>
      <View style={styles.msErr}>
        {error ? <Error message={error} /> : null}
      </View>
      <ScrollView style={styles.boxScroll}>
        <View style={styles.info}>
          <View style={styles.itemInput}>
            <View style={styles.itemUser}>
              <Icon2 style={styles.icon} name="email-outline" size={20} />
              <Text> Email:</Text>
            </View>
            <TextInput
              style={styles.text1}
              value={email}
              type="text"
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
              placeholder="example@gmail.com"></TextInput>
          </View>
          <View style={styles.itemInput}>
            <View style={styles.itemUser}>
              <Icon style={styles.icon} name="keyboard-o" size={20} />
              <Text> Password:</Text>
            </View>
            <TextInput
              style={styles.text1}
              value={password}
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
              placeholder="*************"></TextInput>
          </View>
          <View style={styles.itemInput}>
            <View style={styles.itemUser}>
              <Icon style={styles.icon} name="address-card-o" size={20} />
              <Text> Mã số SV:</Text>
            </View>
            <TextInput
              style={styles.text1}
              value={mssv}
              keyboardType="numeric"
              onChangeText={text => setMssv(text)}
              placeholder="1911066666"></TextInput>
          </View>
          <View style={styles.itemInput}>
            <View style={styles.itemUser}>
              <Icon style={styles.icon} name="github-alt" size={20} />
              <Text> Họ và tên:</Text>
            </View>

            <TextInput
              style={styles.text1}
              value={hoten}
              keyboardType="default"
              onChangeText={text => setTen(text)}
              placeholder="Duong Huynh Nguyen"></TextInput>
          </View>
          <View style={styles.itemInput}>
            <View style={styles.itemUser}>
              <Icon1 style={styles.icon} name="people-circle-sharp" size={20} />
              <Text> Lớp:</Text>
            </View>
            <TextInput
              style={styles.text1}
              value={lop}
              keyboardType="default"
              onChangeText={text => setLop(text.toLocaleUpperCase())}
              placeholder="19DTHJB1"></TextInput>
          </View>
          <View style={styles.itemInput}>
            <View style={styles.itemUser}>
              <Icon1 style={styles.icon} name="calendar-sharp" size={20} />
              <Text> Ngày sinh:</Text>
            </View>
            <TextInput
              style={styles.text1}
              value={ngaysinh}
              keyboardType="numeric"
              onPressIn={() => setOpen(true)}
              placeholder="dd/mm/yyyy"></TextInput>
          </View>
        </View>
        <DatePicker
        modal
        open={open}
        date={date}
        mode='date'
        onConfirm={(date) => {
          setDate(date)
          setOpen(false)
          setNgaySinh(
            moment(date).format('DD-MM-YYYY')
          )
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      </ScrollView>
      <View style={styles.itemInputbtn}>
        <TouchableOpacity
          style={[styles.btnConfirm, isPressed && styles.buttonPressed]}>
          <Center>
            <VStack>
              <Text style={styles.titleBtn} onPress={() => handleSubmit()}>
                Xác nhận
              </Text>
            </VStack>
          </Center>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginBottom: 10, flexDirection: 'row-reverse', width: width-60}} onPress={handleClickLogin}>
        <Text style={styles.titleRes}>Login</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
  },
  info: {
    width: width - 40,
    backgroundColor: Colors.white,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 20,
  },
  buttonPressed: {
    backgroundColor: Colors.gray,
    color: Colors.white,
  },
  boxScroll: {
    backgroundColor: Colors.main,
    borderRadius: 20,
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
  boxH: {
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    width: width,
  },
  itemInput: {
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 4,
    marginTop: 10,
  },
  itemInputbtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemUser: {
    flexDirection: 'row',
    marginBottom: -10,
  },
  input: {
    fontSize: 16,
    color: Colors.black,
    width: width - 40,
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  inputFocus: {
    borderColor: Colors.bluemain,
    borderWidth: 1,
  },
  btnConfirm: {
    width: width - 220,
    height: 50,
    backgroundColor: Colors.gray,
    marginTop: 20,
    borderRadius: 30,
    borderColor: Colors.main,
    borderWidth: 2,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 16,
    marginBottom: 10,
  },
  text1: {
    height: 50,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.main,
    marginTop: 20,
    fontSize: 18,
  },
  titleBtn: {
    color: Colors.black,
    fontWeight: '400',
    fontSize: 18,
    paddingTop: 10,
  },
  msErr: {
    marginTop: 10,
  },
  titleRes: {
    color: Colors.main,
    fontSize: 14
  }
});
