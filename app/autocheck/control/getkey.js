import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log('Error getting data:', e);
  }
};
export default getData;
