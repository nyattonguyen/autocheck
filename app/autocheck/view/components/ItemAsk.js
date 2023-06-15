import {Input, Text, View} from 'native-base';
import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import Colors from '../color';
import {CheckBox, Icon} from '@rneui/themed';

const {width, height} = Dimensions.get('window');

const ItemAsk = props => {
  console.log('day ne mm ', props);
  // const data = props.item.dapan;
  // const type = props.item.loai;

  // const [selectedValue, setSelectedValue] = useState(null);
  // const [checkedSV, setCheckedSV] = useState(false);
  // const [arrAsked, setArrayAsked] = useState([]);
  // var [input, setInput] = useState('');
  // var [inputNot, setInputNot] = useState('');
  // var [typeInput, setTypeInput] = useState('');
  // var [dapansv, setDapansv] = useState([]);

  // if (type === 'radio') {
  //   typeInput = '';
  //   inputNot = 'circle-o';
  //   input = 'dot-circle-o';
  // } else if (type === 'checkbox') {
  //   typeInput = 'material-community';
  //   input = 'checkbox-outline';
  //   inputNot = 'checkbox-blank-outline';
  // }

  // const handleSelectItem = (value) => {
  //   setSelectedValue(value);
  //   console.log("gia tri", value);
  //   console.log("day ne dm", dapansv)
  //   if (!selectedValue) {
  //     dapansv.push(value);
  //     setDapansv(dapansv);
  //   } else {
  //     const index = dapansv.indexOf(value);
  //     if (index !== -1) {
  //       dapansv.splice(index, 1);
  //     }
  //   }
  // }

  return (
    <View>
      <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <CheckBox
              iconType={typeInput}
              checkedIcon={input}
              uncheckedIcon={inputNot}
              checked={checkedSV}
              onPress={() => {
                
                setCheckedSV(!checkedSV)
                handleSelectItem(data[0]);
                }}

            />
            <Text style={styles.labelAsk}>{item}</Text>
          </View>
      </View>
    </View>
  );
        
};

const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: width,
    flexDirection: 'row',
    position: 'relative',
  },
  radio: {
    marginLeft: 10,
    marginTop: 6,
  },
  labelAsk: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '400',
  },
});

export default ItemAsk;
