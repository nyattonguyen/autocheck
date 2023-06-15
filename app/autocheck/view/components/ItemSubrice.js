import React from 'react';
import {
  Avatar,
  Box,
  Heading,
  ScrollView,
  Text,
  View,
  VStack,
} from 'native-base';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../color';
import {Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const ItemSubrice = props => {
  const {item} = props;

  return (
    <TouchableOpacity style={styles.container} key={item.id}>
      <Box style={styles.avatar}>
        <AntDesign
          name="filetext1"
          size={20}
          style={styles.fileImg}
          color={Colors.white}
        />
      </Box>
      <View style={styles.desc}>
        <Heading style={styles.title}>{item.tieude}</Heading>
        <Text style={styles.time}>{item.thoigian}</Text>
      </View>
      <Icon
        name="check-circle"
        size={24}
        color={Colors.main}
        style={{right: 30, position: 'absolute'}}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width,
    height: 100,
    backgroundColor: Colors.white,
    alignItems: 'center',
    borderWidth: 0,
    shadowColor: Colors.blue,
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowRadius: 7.49,
    elevation: 20,
  },

  buttonPressed: {
    backgroundColor: Colors.gray,
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    marginLeft: 20,
    backgroundColor: Colors.main,
    width: 60,
    height: 60,
    marginTop: 5,
    borderRadius: 50,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  fileImg: {
    fontWeight: '600',
  },
  desc: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    color: Colors.black,
    letterSpacing: 1,
  },
  time: {
    color: Colors.black,
    fontSize: 14,
  },
});
export default ItemSubrice;
