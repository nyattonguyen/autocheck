import {
  Center,
  FlatList,
  Text,
  View,
} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../color';
import ItemExercise from '../../components/ItemExercise';
import AuthGlobal from '../../context/store/AuthGlobal';
import LinearGradient from 'react-native-linear-gradient';
import baseURL from '../../common/baseURL';
import {ActivityIndicator} from 'react-native';

const NotSubmiteExer = ({navigation}) => {
  const context = useContext(AuthGlobal);
  context.bainopsv = [];
  const id = context.sinhvien.maso;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    fetch(`${baseURL}/sinhvien/baitap/danggiao/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(res => {
        setData(res);
        if (data) {
          setIsLoading(false);
        }
      })
      .catch(err => console.log('Lỗi Server get data exer', err));
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#171f33', '#111013', '#171f33', '#000000']}
      style={styles.container}>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.main} style={{marginTop: 30}} />
        ) : data.length === 0 ? (
          <Center>
            <Text style={{color: Colors.white, marginTop: 30, fontSize: 16}}>
              Chưa có bài tập nào
            </Text>
          </Center>
        ) : (
          <FlatList
            background={Colors.black}
            data={data}
            renderItem={({item}) => <ItemExercise key={item.id} item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default NotSubmiteExer;
