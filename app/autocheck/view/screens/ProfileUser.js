import React, {useEffect, useState} from 'react';
import {
  Box,
  Image,
  Input,
  Text,
} from 'native-base';
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../color';
//navigation
import AuthGlobal from '../context/store/AuthGlobal';
import {useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import baseURL from '../common/baseURL';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';

const {width, height} = Dimensions.get('window');

export default function ProfileUser(props) {
  const context = useContext(AuthGlobal);
  const data = context.sinhvien;
  const navigation = useNavigation();
  const [hoten, setTen] = useState('');
  const [mssv, setMssv] = useState('');
  const [lop, setLop] = useState('');
  const [email, setEmail] = useState('');

  const [ngaySinh, setNgaySinh] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [active, setActive] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };
  const handleNextPW = () => {
    navigation.navigate("Change Password", data);
  }
  const handleUpdateInfo = () => {
    const info = {
      id:data.id,
      hoten: hoten,
      maso: mssv,
      lop: lop,
      ngaysinh: ngaySinh,
      mathietbi: data.mathietbi,
      email: email,
    };
    fetch(`${baseURL}/sinhvien/capnhat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(info),
    })
      .then(res => res.json())
      .then(res => {
        Toast.show({
          topOffset: 60,
          type: "success",
          text1: "Cập nhật thành công",
          text2: "",
        });
        setTimeout(() => {
        }, 500);
        setActive(false);
      })
      .catch(err => {
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Xảy ra lỗi",
          text2: "Hãy thử lại sau ",
        });
        console.log("Lỗi update thông tin cá nhân", err);
      });
  };

  return (
    <ScrollView>
      <LinearGradient
        colors={['#111013', '#171f33', '#111013', '#635f5f']}
        style={styles.container}>
        <TouchableOpacity style={styles.btnBack} onPress={handleBack}>
          <Icon1
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
                  <View style={styles.boxH}>
                    <Icon1
                      name="information-circle-outline"
                      size={22}
                      style={styles.iconHeader}
                    />

                    <Text style={styles.heading}>Thông tin của bạn</Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      marginTop: 40,
                      marginBottom: 10,
                      marginLeft: 30,
                    }}
                    onPress={() => setActive(true)}>
                    <Icon
                      name="edit"
                      size={20}
                      style={[styles.icon, {color: Colors.white}]}
                    />
                    <Text
                      style={{
                        fontWeight: '400',
                        color: Colors.white,
                        marginLeft: 4,
                      }}>
                      Chỉnh sửa
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.formInfo}>
                  <ScrollView>
                    <Box style={styles.inputItem}>
                      <View style={styles.itemUser}>
                        <Icon
                          style={styles.icon}
                          name="address-card-o"
                          size={20}
                        />
                        <Text> Mã số SV:</Text>
                      </View>
                      {active === true ? (
                        <Input
                          style={styles.text1}
                          placeholder={data.maso}
                          onChangeText={e => setMssv(e)}
                        />
                      ) : (
                        <Text style={styles.text1}>{data.maso}</Text>
                      )}
                    </Box>
                    <Box style={styles.inputItem}>
                      <View style={styles.itemUser}>
                        <Icon style={styles.icon} name="github-alt" size={20} />
                        <Text> Họ và tên:</Text>
                      </View>

                      {active === true ? (
                        <Input
                          style={styles.text1}
                          placeholder={data.hoten}
                          onChangeText={e => setTen(e)}
                        />
                      ) : (
                        <Text style={styles.text1}>{data.hoten}</Text>
                      )}
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
                      {active === true ? (
                        <Input
                          style={styles.text1}
                          placeholder={data.lop}
                          onChangeText={e => setLop(e)}
                        />
                      ) : (
                        <Text style={styles.text1}>{data.lop}</Text>
                      )}
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
                      {active === true ? (
                        <View>
                          <Input
                            style={styles.text1}
                            placeholder={data.ngaysinh}
                            value={ngaySinh}
                            keyboardType="numeric"
                            onPressIn={() => setOpen(true)}></Input>
                          <DatePicker
                            modal
                            open={open}
                            date={date}
                            mode="date"
                            onConfirm={date => {
                              setDate(date);
                              setOpen(false);
                              setNgaySinh(moment(date).format('DD-MM-YYYY'));
                            }}
                            onCancel={() => {
                              setOpen(false);
                            }}
                          />
                        </View>
                      ) : (
                        <Text style={styles.text1}>{data.ngaysinh}</Text>
                      )}
                    </Box>
                    <Box style={styles.inputItem}>
                      <View style={styles.itemUser}>
                        <Icon2
                          style={styles.icon}
                          name="email-outline"
                          size={20}
                        />
                        <Text> Email</Text>
                      </View>
                      {active === true ? (
                        <Input
                          style={styles.text1}
                          placeholder={data.email}
                          onChangeText={e => setEmail(e)}
                        />
                      ) : (
                        <Text style={styles.text1}>{data.email}</Text>
                      )}
                    </Box>
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
                      {active === true ? (
                        <TouchableOpacity
                          style={styles.btnOK}
                          onPress={handleUpdateInfo}>
                          <Text style={styles.titleBtn}>OK</Text>
                        </TouchableOpacity>
                      ) : null}
                    </View>
                  </ScrollView>
                </View>
                <TouchableOpacity style={{ marginBottom:30, marginTop:-10}} onPress={handleNextPW}>
                  <Text style={{color: Colors.main}}>Đổi mật khẩu</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Box>
        </View>
      </LinearGradient>
    </ScrollView>
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
  },
  imgUser: {
    width: 150,
    height: 150,
    marginTop: 30,
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
    backgroundColor: Colors.orange,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 40,
    marginBottom: 10,
    height: 50,
    width: 200,
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
  btnBack: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
