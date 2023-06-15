import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import baseURL from '../../common/baseURL';
import { useNavigation } from '@react-navigation/native';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT = 'LOGOUT';
export const SET_ID_DIENTHOAI = 'SET_ID_DIENTHOAI';

const navigation = useNavigation();
export const sinhvienDangnhap = (sinhvien, dispatch) => {
  fetch(`http:localhost:9090/sinhvien/dangnhap`, {
    method: 'POST',
    body: JSON.stringify(sinhvien),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      if (data) {
        const token = data.token;
        AsyncStorage.setItem('jwt', token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded, data.sinhvien));
      } else {
        sinhvienDangxuat(dispatch);
      }
    })
    .catch(err => {
      Toast.show({
        topOffset: 60,
        type: 'error',
        text1: 'Email hoặc mật khẩu của bạn không chính xác',
        text2: '',
      });
      sinhvienDangxuat(dispatch);
    });
};

export const getsinhvienProfile = id => {
  fetch(`http:localhost:9090/sinhvien/${id}`, {
    method: 'GET',
    body: JSON.stringify(sinhvien),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};

// xóa file key
export const sinhvienDangxuat = dispatch => {
  fetch(`${baseURL}/sinhvien/dangxuat`, {
    method: 'GET',
    header: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      dispatch(setLogout());
    });

};

export const setCurrentUser = (decoded, sinhvien) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
    thongtinSinhvien: sinhvien,
  };
};

export const setLogout = () => {
  return {
    type: LOGOUT,
  };
};
