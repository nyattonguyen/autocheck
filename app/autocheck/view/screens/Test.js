import React, { useEffect, useState } from 'react';
import {Box, NativeBaseProvider, Text, View, Modal, Button} from 'native-base';
import HomeInfo from '../components/HomeInfo';
import Colors from '../color';
import {BackHandler, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import AuthGlobal from '../context/store/AuthGlobal';
import CircleAnimation from '../components/Circle';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
export default function HomeScreen(props, thongtinsinhvien) {
  const [exitPopupVisible, setExitPopupVisible] = useState(false);
  console.log("asd dasd ")
  useEffect(() => {
    const backAction = () => {
      setExitPopupVisible(true);
      return true;
    };
  
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  
    return () => backHandler.remove();
  }, []);
  

  const handleExitPopupYes = () => {
    BackHandler.exitApp();
  };

  const handleExitPopupNo = () => {
    setExitPopupVisible(false);
  };
  return (
    <LinearGradient
      colors={['#171f33','#111013', '#000000', '#171f33']}
      style={styles.container}>
      <View style={styles.container}>
        <CircleAnimation />
        {/* <HomeInfo data={thongtinsinhvien} /> */}
      </View>
      <Modal isOpen={exitPopupVisible} onClose={() => setExitPopupVisible(false)}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Thoát</Modal.Header>
          <Modal.Body>
            <Text>Bạn có thật sự muốn thoát không?</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button onPress={handleExitPopupNo}>Không</Button>
            <Button onPress={handleExitPopupYes} marginLeft={10}>Có</Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: null,
  },
});
