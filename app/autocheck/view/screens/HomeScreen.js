import React, { useEffect, useState } from 'react';
import { Button, Modal, Text, View} from 'native-base';
import HomeInfo from '../components/HomeInfo';
import {BackHandler, StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import CircleAnimation from '../components/Circle';
import LinearGradient from 'react-native-linear-gradient';

const {width} = Dimensions.get('window');
export default function HomeScreen(props, thongtinsinhvien) {
  const [exitPopupVisible, setExitPopupVisible] = useState(false);

  useEffect(() => {
    const backAction = () => {
      setExitPopupVisible(true);
      return true;
    };
  
    BackHandler.addEventListener('hardwareBackPress', backAction);
  
    return () => BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);
  

  const handleExitPopupYes = () => {
    setExitPopupVisible(false);
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
        <HomeInfo data={thongtinsinhvien} />
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
