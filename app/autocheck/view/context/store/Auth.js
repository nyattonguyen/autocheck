import React, {useContext, useEffect, useReducer, useState} from 'react';
import authReducer from '../reducers/Auth.reducer';
import AuthGlobal from './AuthGlobal';
import thietbi from '../../../control/getid';
import getData from '../../../control/getkey';
import savekey from '../../../control/savekey';
import {useNavigation} from '@react-navigation/native';
import baseURL from '../../common/baseURL';
import { useCallback } from 'react';

const Auth = props => {
  var context = useContext(AuthGlobal);
  
  const navigation = useNavigation();
  const [mathietbi, setMaThietBi] = useState('');
  const [key, setKey] = useState('');
  const [sinhvien, setSinhVien] = useState('');

  const [stateUser, dispatch] = useReducer(authReducer, {
    isAuthenticated: null,
    sinhvien: {},
    mathietbi: mathietbi,
    key,
  });
  //context = {};
  const [showChild, setShowChild] = useState(false);
  // bắt buộc lấy thông tin sinh viên và khóa đăng nhập và id điện thoại mới xử lí tiếp
  // Các trường hợp còn lại sai ngưng xử lí


  useEffect(() => {
    async function getKhoa() {
      const id = await thietbi();
      setMaThietBi(id);

      const sv = await getData('sinhvien');
      setSinhVien(sv);
      
      //context.sinhvien = sv;
      // dispatchCallback({type: 'SET_CURRENT_USER', payload: sv});
      
      if (sv !== undefined) {
        // add loading
        fetch(`${baseURL}/sinhvien/dangnhap/thietbicu/${sv.id}`)
          .then(res => res.json())
          .then(data => {
            if (data) {
              setSinhVien(data);
              //dispatch({type: 'SET_CURRENT_USER', payload: data});
              savekey('sinhvien', data);
              console.log("data ne me m ", data)
              navigation.navigate('Bottom');
            } else {
              navigation.navigate('Login');
            }
          })
          .catch(err => {
            navigation.navigate('Login');
          })
      } else {
        navigation.navigate('Register');
      }
    }
    getKhoa();
    setShowChild(true);

    return () => setShowChild(false);
  }, []);

  if (!showChild) {
    return null;
  } else {
    return (
      <AuthGlobal.Provider
        value={{
          stateUser,
          dispatch,
          mathietbi,
          key,
          sinhvien
        }}>
        {props.children}
      </AuthGlobal.Provider>
    );
  }
};

export default Auth;
