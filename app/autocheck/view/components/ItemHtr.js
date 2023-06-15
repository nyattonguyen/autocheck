import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import Colors from '../color';

var {width, height} = Dimensions.get('window');

const ItemHtr = props => {
  const {thoigian, mon, buoiso} = props;
  const truncatedMon = mon.length > 25 ? mon.substring(0, 25) + '...' : mon;
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.monH}>{truncatedMon}</Text>
          <Text style={styles.ngayDD}>{buoiso} || {thoigian}</Text>
        </View>
      </View>
    </View>
  );
};

// const mapStateToProps = (dispatch) => {
//   return {
//     addItemToCart: (product) =>
//       dispatch(actions.addToCart({ quanlity: 1, product })),
//   };
// };

const styles = StyleSheet.create({
  container: {
    width: width - 30,
    height: width / 2 - 100,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
    alignItems: 'center',
    elevation: 8,
    borderWidth: 1,
    borderColor: Colors.white,
    backgroundColor: Colors.black,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },

  card: {
    marginBottom: 10,
    height: 65,
    backgroundColor: 'transparent',
    width: width - 60,
  },
  monH: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: Colors.white,
  },
  ngayDD: {
    fontSize: 18,
    color: Colors.main,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ItemHtr;
