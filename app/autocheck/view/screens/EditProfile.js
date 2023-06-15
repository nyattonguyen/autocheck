import React, {useState} from 'react';
import {
  Box,
  FlatList,
  Image,
  Input,
  NativeBaseProvider,
  Text,
  usePropsResolution,
} from 'native-base';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';

import Colors from '../color';
import user from '../assets/user.json';
import Error from '../components/Error';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function EditProfile() {
  const navigation = useNavigation();

  const [ten, setTen] = useState('');
  const [mssv, setMssv] = useState('');
  const [lop, setLop] = useState('');
  const [ngaySinh, setNgaySinh] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const user = {
      ten,
      mssv,
      lop,
      ngaySinh,
    };

    if (ten === '' || ngaySinh === '' || mssv === '' || lop === '') {
      setError('Bạn hãy điền đầy đủ thông tin');
    } else {
      // loginUser(user, context.dispatch)
    }
    navigation.navigate('ProfileUser');
  };
  return (
    <View>
      <Box flex={1} bg={Colors.subGreen}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.header}>
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
            </View>
            <View>
              <View style={styles.itemUser}>
                <Icon1
                  name="information-circle-outline"
                  size={22}
                  style={styles.iconHeader}
                />

                <Text style={styles.heading}>Thông tin của bạn</Text>
              </View>
              <View style={styles.msErr}>
                {error ? <Error message={error} /> : null}
              </View>
              <View style={styles.formInfo}>
                <Box style={styles.inputItem}>
                  <View style={styles.itemUser}>
                    <Icon style={styles.icon} name="address-card-o" size={20} />
                    <Text> Mã số SV:</Text>
                  </View>
                  <Input style={styles.text1} placeholder="1911066666"></Input>
                </Box>
                <Box style={styles.inputItem}>
                  <View style={styles.itemUser}>
                    <Icon style={styles.icon} name="github-alt" size={20} />
                    <Text> Họ và tên:</Text>
                  </View>

                  <Input
                    style={styles.text1}
                    placeholder="Duong Nguyen Huynh"></Input>
                </Box>
                <Box style={styles.inputItem}>
                  <View style={styles.itemUser}>
                    <Icon1
                      style={styles.icon}
                      name="people-circle-sharp"
                      size={20}
                    />
                    <Text> Lớp:</Text>
                  </View>
                  <Input style={styles.text1} placeholder="19DTHJB1"></Input>
                </Box>
                <Box style={styles.inputItem}>
                  <View style={styles.itemUser}>
                    <Icon1
                      style={styles.icon}
                      name="calendar-sharp"
                      size={20}
                    />
                    <Text> Ngày sinh:</Text>
                  </View>
                  <Input style={styles.text1} placeholder="2/7/2023"></Input>
                </Box>
                <TouchableOpacity style={styles.btnOK}>
                  <Text style={styles.titleBtn}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Box>
    </View>
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
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 25,
  },
  formInfo: {
    width: width - 40,
    backgroundColor: Colors.white,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 30,
    borderRadius: 20,
    shadowColor: Colors.bluemain,
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 20,
  },
  imgUser: {
    width: 150,
    height: 150,
    marginTop: 50,
    marginBottom: 30,
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
  text1: {
    fontSize: 16,
    margin: 10,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 36,
    backgroundColor: Colors.white,
    borderWidth: 0,
  },
  icon: {
    marginTop: 2,
  },
  iconHeader: {
    fontWeight: '500',
    marginRight: 4,
  },
  btnOK: {
    backgroundColor: Colors.orange,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 40,
    height: 50,
    borderRadius: 40,
    alignItems: 'center',
    shadowColor: Colors.red,
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  titleBtn: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: '500',
  },
  iconBack: {
    color: Colors.black,
    marginLeft: 20,
  },
  msErr: {
    marginTop: 10,
  },
});
