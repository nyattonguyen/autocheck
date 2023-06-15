import {useContext, useEffect} from 'react';
import GetLocation from 'react-native-get-location';
import AuthGlobal from '../view/context/store/AuthGlobal';
import baseURL from '../view/common/baseURL';
import Toast from 'react-native-toast-message';
import {useState} from 'react';
import {ToastAndroid} from 'react-native';

const Diemdanh = ({navigation, route}) => {
  const context = useContext(AuthGlobal);
  const [qrKey, setQrKey] = useState(context.qrkey);
  const [rerender, setRerender] = useState(false);

  if (route.params?.rerender == true) {
    if (rerender == false) {
      setRerender(true);
    }
  }
  useEffect(() => {
    if (!context.daxacthuc) {
    } else if (context.location) {
      if (context.qrkey) {
        const sv = {
          masv: context.sinhvien.maso,
          khoadt: context.mathietbi,
          idsv: context.sinhvien.id,
          khoadiemdanh: context.qrkey,
          lat: context.location.latitude,
          lng: context.location.longitude,
        };
        fetch(`${baseURL}/sinhvien/diemdanh`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(sv),
        })
          .then(response => {
            response.json();
          })
          .then(data => {
            context.qrkey = null;
            context.daxacthuc = null;
            if (data) {
              ToastAndroid.show('Điểm danh thành công', ToastAndroid.SHORT);
            }
            navigation.navigate('Auto');
          })
          .catch(error => {
            ToastAndroid.show('Điểm danh thất bại', ToastAndroid.SHORT);
          });
      } else {
        navigation.navigate('Camera');
      }
    } else {
      console.log('lay vi tri');
      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          context.location = location;
          navigation.navigate('Camera');
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message);
        });
    }
  }, [rerender]);
};

export default Diemdanh;
