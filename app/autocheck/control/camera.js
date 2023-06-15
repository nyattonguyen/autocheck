import React, {useState, useCallback} from 'react';
import AuthGlobal from '../view/context/store/AuthGlobal';
import {
  Dimensions,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Camera,
  CameraPermissionStatus,
  useFrameProcessor,
} from 'react-native-vision-camera';
import {useCameraDevices} from 'react-native-vision-camera';
import {
  useScanBarcodes,
  BarcodeFormat,
  scanBarcodes,
} from 'vision-camera-code-scanner';
import {
  useSharedValue,
  runOnJS,
  useDerivedValue,
  useAnimatedReaction,
} from 'react-native-reanimated';
import {useContext} from 'react';
import {Center} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Colors from '../view/color';
import LinearGradient from 'react-native-linear-gradient';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  camera: {
    width: width,
    height: height,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
const ScanCamera = () => {
  const navigation = useNavigation();
  const context = useContext(AuthGlobal);
  var activecamera = true;
  //const [cameraPermission, setCameraPermission] =
  //  useState<CameraPermissionStatus>();
  const [hasPermission, setHasPermission] = useState(false);
  const [isBack, setIsBack] = useState(false);

  const onQRCodeDetected = useCallback((qrCode: string) => {
    activecamera = false;
    context.qrkey = qrCode;
    if (navigation.canGoBack()) {
      if (isBack == false) {
        setIsBack(true);
        navigation.navigate('DiemDanh', {rerender: true});
      }
    }
  }, []);

  const frameProcessor = useFrameProcessor(
    frame => {
      'worklet';
      const qrCodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], {
        checkInverted: true,
      });
      console.log('Đang chờ');
      if (qrCodes.length > 0) {
        runOnJS(onQRCodeDetected)(qrCodes[0].displayValue);
      }
    },
    [onQRCodeDetected],
  );

  const Hotro = () => {
    var t = 'Camera không hỗ trợ hoặc chưa cấp quyền';
    var device = opencamera();
    if (!hasPermission) return;
    if (device)
      return (
        device != null &&
        hasPermission && (
          <>
            <Camera
              style={styles.camera}
              device={device}
              focusable={true}
              isActive={activecamera}
              frameProcessor={frameProcessor}
              frameProcessorFps={5}
            />
          </>
        )
      );
    return (
      <LinearGradient
      colors={['#171f33','#111013', '#171f33', '#000000']}
      style={{flex:1}}>
        <Center>
          <Text style={{color: Colors.white}}>Phần mềm không hỗ trợ thiết bị này</Text>;
        </Center>
      </LinearGradient>
    )
    
    //}

    //return <Text>{t}</Text>;
  };
  React.useEffect(() => {
    (async () => {
      const cp = await Camera.getCameraPermissionStatus();
      if (cp === 'authorized') {
        setHasPermission(true);
      } else {
        const status = await Camera.requestCameraPermission();

        setHasPermission(status === 'authorized');
      }
    })();
  }, []);

  const opencamera = () => {
    const devices = useCameraDevices();
    const device = devices.back;
    const isAppForeground = true;
    if (!device) return;
    return device;
  };

  return <Hotro />;
};

export default ScanCamera;
