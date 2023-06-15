import AsyncStorage from '@react-native-async-storage/async-storage';
const saveData = async (key, value) => {
  try {
    key = 'sinhvien';
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log('Error saving data:', e);
  }
};

export default saveData;
