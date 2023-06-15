import {Center, ScrollView, Text, View} from 'native-base';
import React, {useState, useEffect, useContext} from 'react';
import ItemSubrice from '../../components/ItemSubrice';
import {FlatList, StyleSheet} from 'react-native';
import Colors from '../../color';
import LinearGradient from 'react-native-linear-gradient';
import AuthGlobal from '../../context/store/AuthGlobal';
import baseURL from '../../common/baseURL';
import {ActivityIndicator} from 'react-native';

const SubmitedExer = ({route}) => {
  const [data, setData] = useState([]);
  const context = useContext(AuthGlobal);
  const id = context.sinhvien.maso;
  const refresh = route.params?.refresh ?? false;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = () => {
    fetch(`${baseURL}/sinhvien/baitap/danop/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then(res => res.json())
      .then(res => {
        setData(res);
        setIsLoading(false);
      })
      .catch(err => console.log('Lỗi Server get data exer', err));
  };

  return (
    <LinearGradient
      colors={['#171f33', '#111013', '#171f33', '#000000', '#171f33']}
      style={styles.container}>
      <View>
        {isLoading ? (
          <ActivityIndicator size="large" color={Colors.main} style={{marginTop: 30}} />
        ) : data.length > 0 ? (
          <FlatList
            background={Colors.black}
            data={data}
            renderItem={({item}) => <ItemSubrice key={item.id} item={item} />}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <Center>
            <Text style={{color: Colors.white, marginTop: 30, fontSize: 16}}>
              Chưa có bài tập nào
            </Text>
          </Center>
        )}
      </View>
    </LinearGradient>
  );
};

export default SubmitedExer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});
