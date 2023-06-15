import { View, Text } from 'native-base';
import { useContext } from 'react';
import GetLocation from 'react-native-get-location'
import AuthGlobal from '../view/context/store/AuthGlobal';
import baseURL from '../view/common/baseURL';
const Diemdanh = ({navigation})  =>{
    const context = useContext(AuthGlobal);
    console.log("Qr fuck you", context.qrkey);
    if(context.qrkey)
    {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        })
        .then(location => {
            if(context.qrkey)
            {
                const sv = {
                    masv : context.sinhvien.masv,
                    khoadt : context.mathietbi,
                    khoadiemdanh : context.qrkey,
                    lat : location.latitude,
                    lng : location.longitude
                }
                fetch(`${baseURL}/sinhvien/diemdanh`,{
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(sv),
                  })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                    })
    
            }
            else
            {
                navigation.navigate('Camera');
            }
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
    }
    else
    {
        navigation.navigate('Camera');
    }
    
    // return ( <View><Text> Dang diem danh</Text></View>);
};
export default Diemdanh;
