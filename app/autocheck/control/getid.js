import DeviceInfo from 'react-native-device-info';

const getId = async () => {
  const ma = await DeviceInfo.getUniqueId();

  return ma;
};
export default getId;
