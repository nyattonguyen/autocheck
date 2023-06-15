import {Box, Center, FlatList, Heading, Input, Text} from 'native-base';
import React, {useState, useContext, useRef} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Colors from '../../color';
import ItemQuestion from '../../components/ItemQuestion';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useEffect} from 'react';
import baseURL from '../../common/baseURL';
import AuthGlobal from '../../context/store/AuthGlobal';
import {ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DropdownAlert from 'react-native-dropdownalert';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Toast from "react-native-toast-message";

const {width, height} = Dimensions.get('window');
const MainSurvey = ({route}) => {
  const item = route.params;
  const context = useContext(AuthGlobal);
  const [data, setData] = useState([]);
  
  const navigation = useNavigation();
  let dropDownAlertRef = useRef();
  useEffect(() => {
    fetch(`${baseURL}/sinhvien/baitap/noidung/${item.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(res => {
        setData(res);
      })
      .catch(err => console.log('Lỗi Server get data exer', err));
    // =================================
    
  }, []);
  const handleBack = () => {
    navigation.goBack();
  };
  const submit = () => {
    fetch(`${baseURL}/sinhvien/baitap/nop/${context.sinhvien.maso}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(context.bainopsv),
    })
      .then(res => res.json())
      .then((res) => {
        context.bainopsv = [];
        Toast.show({
          topOffset: 60,
          type: "success",
          text1: "Nộp bài thành công",
          text2: "",
        });
        setTimeout(() => {
          navigation.navigate('Đã nộp', {refresh: true});
        }, 500);
        
      })
      .catch(err => {
        Toast.show({
          topOffset: 60,
          type: "error",
          text1: "Xảy ra lỗi",
          text2: "Hãy thử lại sau ",
        });
        console.log("Lỗi nộp bài tập", err);
      });
  };
  
  return (
      <LinearGradient
      colors={['#171f33', '#111013', '#171f33', '#635f5f']}
      style={styles.container}>
      <Toast />
      <TouchableOpacity style={styles.btnBack} onPress={handleBack}>
          <Icon1
            name="ios-chevron-back-outline"
            size={26}
            color={Colors.white}
          />
        </TouchableOpacity>
          <View style={styles.boxNotify}>
            <DropdownAlert ref={(ref) => {
          if (ref) {
            dropDownAlertRef = ref;
          }
        }} />
          </View>
      {data.length > 0 ? (
        <View style={styles.content}>
          <Box style={styles.header}>
            <View style={styles.title}>
              <Heading style={styles.h1}>Tiêu đề: </Heading>
              <Input
                multiline={true}
                _disabled={true}
                numberOfLines={2}
                variant="underlined"
                placeholder="Tiêu đề trống"
                style={styles.textH2}
                width="95%"
                mt={-4}
                value={item.tieude}
              />
            </View>
            <View style={styles.desc}>
              <Text style={styles.h3}>Mô tả: </Text>
              <Input
                variant="underlined"
                _disabled={true}
                placeholder="Mô tả trống"
                width="95%"
                style={styles.TextH3}
                value={item.mota}
              />
            </View>
          </Box>
          <View style={styles.body}>
            <View style={{height: height - 250}}>
              <FlatList
                data={data}
                renderItem={({item}) => <ItemQuestion {...item} />}
                keyExtractor={item => item.id}
                contentContainerStyle={{paddingBottom: 50}}
                flex={1}
              />
            </View>

            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity style={styles.btnSubmit} onPress={submit}>
                <Text
                  style={{
                    color: Colors.white,
                    margin: 10,
                    fontWeight: '600',
                    fontSize: 18,
                  }}>
                  Xác nhận
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : (
        <Center>
          <ActivityIndicator size="large" />
        </Center>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 'auto',
    backgroundColor: Colors.subGreen,
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  content: {
    height: 'auto',
    width: width - 30,
    overflow: 'scroll',
    marginTop: 20
  },
  header: {
    height: 250,
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderTopWidth: 8,
    marginTop: 30,
    borderTopColor: Colors.borderMain,
    overflow: 'hidden',
  },
  title: {
    height: 60,
    marginLeft: 15,
    display: 'flex',
  },
  h1: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  textH2: {
    fontSize: 22,
  },
  desc: {
    marginLeft: 15,
    marginTop: 70,
  },
  TextH3: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  body: {
    marginTop: 15,
    borderRadius: 20,
  },
  btnSubmit: {
    height: 50,
    borderRadius: 10,
    width: 200,
    bottom: 130,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flex: 2,
    position: 'absolute',
    backgroundColor: Colors.black,
    zIndex: 2,
  },
  buttonPressed: {
    backgroundColor: Colors.gray,
    color: Colors.black,
  },
  boxNotify: {
    width:width
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

export default MainSurvey;
