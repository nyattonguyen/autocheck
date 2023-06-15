import React, {useContext, useState} from 'react';
import {Box, Center, Text, View} from 'native-base';
import {StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Colors from '../color';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthGlobal from '../context/store/AuthGlobal';
import savekey from '../../control/savekey';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';
import Toast from "react-native-toast-message";
import baseURL from '../common/baseURL';
const {width, height} = Dimensions.get('window');

function LoginScreen() {
  const navigation = useNavigation();
  const context = useContext(AuthGlobal);
  console.log(context)
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  if(email === "" && password === "") {
    return ;
    
  }
  if(context.sinhvien) {
    fetch(`${baseURL}/sinhvien/dangnhap/thietbicu/${context.sinhvien.id}`, {
      headers: {'Content-Type': 'application/json'},
      method: 'GET'
    })
      .then(res => res.json())
      .then(data => {
        if(data.error) {

          setError(true);
          return }
        savekey('sinhvien',data);
        context.sinhvien = data;
        Toast.show({
          topOffset: 60,
          type: "success",
          text1: "Đăng nhập thành công",
          text2: "",
        });
        setTimeout(() => {
          console.log("chay den dau r ")
          navigation.navigate("Bottom");
        }, 500);
      })
      .catch(error => {
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Xảy ra lỗi",
          text2: "Hãy thử lại sau ",
        });
        console.log('Loi login ne !', error )});
    
  }

  const handleClick = () => {
    const sinhvien = {email, password};
    if(email === "" || password === "") {
      setError(true);
    }
    const idDienThoai = context.mathietbi;
      fetch(`${baseURL}/sinhvien/dangnhap/thietbimoi/${idDienThoai}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(sinhvien),
      })
        .then(res => res.json())
        .then(data => {
          savekey('sinhvien',data);
          context.sinhvien = data;
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: "Đăng nhập thành công",
            text2: "",
          });
          setTimeout(() => {
            navigation.navigate("Bottom");
          }, 500);
          console.log("o day ne ")
        })
        .catch(error => {
          Toast.show({
            topOffset: 60,
            type: "error",
            text1: "Xảy ra lỗi",
            text2: "Hãy thử lại sau ",
          });
          console.log('Loi login ne !')});
    
  };

  return (
    <View style={styles.container}>
    <Toast />
    <Image
          source={require('../assets/img/AUtocheck.png')}
          alt="logo"
          style={styles.imgLogo}
        /> 
      <Box style={styles.formLogin}>
        {error ? (
          <View style={styles.boxError}>
          <Text style={styles.error}>Vui lòng điền đúng thông tin</Text>
        </View>
        ): null}
        <View style={styles.itemInput}>
          <View style={styles.itemUser}>
            <Icon1 style={styles.icon} name="email-outline" size={20} />
            <Text style={{color: Colors.black}}> Email: </Text>
          </View>
          <TextInput
            style={styles.input}
            value={email}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            placeholder="nguyennguyen@gmail.com"></TextInput>
        </View>
        <View style={styles.itemInput}>
          <View style={styles.itemUser}>
            <Icon style={styles.icon} name="keyboard-o" size={20} />
            <Text style={{color: Colors.black}}> Password:</Text>
          </View>
          <TextInput
            style={styles.input}
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            placeholder="**************"></TextInput>
        </View>

        <TouchableOpacity onPress={handleClick}>
          <Center style={styles.btnSubmit}>
            <Text style={{color: Colors.black, fontSize: 16}}>Login</Text>
          </Center>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Center style={styles.btnRegister}>
            <Text style={{color: Colors.main, fontSize: 16}}>Register</Text>
          </Center>
        </TouchableOpacity>
      </Box>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    backgroundColor:Colors.black,
    shadowColor: Colors.red,
  },
  formLogin: {
    width: width - 30,
    height:350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -60,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: Colors.white,
    opacity:0.9,
    borderWidth: 2,
    borderRadius: 20,
    shadowColor: Colors.red,
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 20,
  },
  input: {
    height: 60,
    width: width-50,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.main,
    marginTop: 10,
    fontSize: 18,
  },
  itemInput: {
    width: width - 50,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 4,
    marginTop: 10,
    marginBottom: 20,
  },
  itemUser: {
    flexDirection: 'row',
  },
  btnSubmit: {
    width: 160,
    height: 50,
    backgroundColor: Colors.white,
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 0,
    marginBottom: 20,
    borderWidth:1, 
    borderColor: Colors.main,
    opacity: 1,
  },
  btnRegister: {
    backgroundColor: "transparent",
    width: 160,
    height: 40,
    position: "absolute",
    flexDirection: "row",
    marginLeft:20
  },
  icon: {
    marginTop:4,
  },
  imgLogo: {
    width: 300,
    height: 300,
    marginTop: -120
  },
  boxError: {
    height: 40,
    paddingBottom: 16
  },
  error: {
    color: Colors.red,
    fontSize: 18,
  }
});

export default LoginScreen;
