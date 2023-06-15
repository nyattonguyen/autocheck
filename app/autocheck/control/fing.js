import TouchID from 'react-native-touch-id';
import {ToastAndroid} from 'react-native';
import {useContext} from 'react';
import AuthGlobal from '../view/context/store/AuthGlobal';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

const optionalConfigObject = {
  title: 'Yêu cầu xác thực', // Android
  imageColor: '#e00606', // Android
  imageErrorColor: '#ff0000', // Android
  sensorDescription: 'Xác thực vân tay', // Android
  sensorErrorDescription: 'Failed', // Android
  cancelText: 'Hủy', // Android
  fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
};

const UseTouchVetify = () => {
  const navigation = useNavigation();

  const context = useContext(AuthGlobal);
  const [kakunin, setKakunin] = useState(false);
  useEffect(() => {
    console.log('xac thuc du lieu', kakunin);
    if (kakunin === true) {
      navigation.navigate('DiemDanh');
    } else {
      XacThuc();
    }
  }, [kakunin]);

  const XacThuc = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else {
          console.log('TouchID is supported.');
          TouchID.authenticate('', optionalConfigObject)
            .then(success => {
              //AlertIOS.alert('Authenticated Successfully');
              ToastAndroid.show('Xác thực thành công', ToastAndroid.SHORT);
              context.daxacthuc = true;
              setKakunin(true);
            })
            .catch(error => {
              //AlertIOS.alert('Authentication Failed');
              ToastAndroid.show('Xác thực thất bại', ToastAndroid.SHORT);
              setKakunin(false);
              context.daxacthuc = false;
              navigation.goBack();
            });
        }
      })
      .catch(error => {
        // Failure code
        console.log('Not support', error);
        ToastAndroid.show('Khong ho tro!', ToastAndroid.SHORT);
      });
  };
};
export default UseTouchVetify;
