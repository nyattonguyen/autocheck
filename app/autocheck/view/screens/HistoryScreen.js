import {useState, useEffect, useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Box, View, Heading, FlatList} from 'native-base';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Colors from '../color';
import {useNavigation} from '@react-navigation/native';
import ItemHtr from '../components/ItemHtr';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import AuthGlobal from '../context/store/AuthGlobal';
import baseURL from '../common/baseURL';
import {ActivityIndicator} from 'react-native';

const {width, height} = Dimensions.get('window');

export default function HistoryScreen(props) {
  const context = useContext(AuthGlobal);
  const idsv = context.sinhvien.maso;
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleBack = () => {
    navigation.goBack();
  }
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetch(`${baseURL}/sinhvien/lichsudiemdanh/${idsv}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'GET',
      })
        .then(res => res.json())
        .then(data => {
          const dataFilter = data.sort((a, b) => {
            if (a.thoigian < b.thoigian) return 1;
            return -1;
          });
          setData(dataFilter);
          setIsLoading(false);
        })
        .catch(err => console.log('Loi lich su diem danh', err));
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <LinearGradient
      colors={['black', '#060505', '#000000', '#635f5f']}
      style={styles.container}>
      <TouchableOpacity style={styles.btnBack} onPress={handleBack}>
        <Icon name="ios-chevron-back-outline" size={26} color={Colors.white} />
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/img/logomain.png')}
          alt="logo"
          style={styles.imgLogo}
        />
        <Box
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: height,
          }}>
          <Box style={styles.boxH}>
            <Heading style={styles.titleH}>Lịch sử điểm danh</Heading>
          </Box>
          <View style={styles.boxHistory}>
            <View style={styles.listHistory}>
              {isLoading ? (
                <ActivityIndicator
                  size="large"
                  color={Colors.main}
                  style={{marginTop: 30}}
                />
              ) : (
                <FlatList
                  data={data}
                  renderItem={({item}) => <ItemHtr {...item} />}
                />
              )}
            </View>
          </View>
        </Box>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: width,
    height: height,
  },
  boxHistory: {
    width: '100%',
    height: height - 100,
    backgroundColor: 'transparent',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    position: 'relative',
    marginTop: 20,
  },
  listHistory: {
    height: height - 330,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  boxH: {
    justifyContent: 'center',
    marginTop: -30,
    borderRadius: 20,
    width: width,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 20,
  },
  imgLogo: {
    width: 200,
    height: 200,
    marginTop: 220,
  },
  titleH: {
    marginLeft: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  btnBack: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
