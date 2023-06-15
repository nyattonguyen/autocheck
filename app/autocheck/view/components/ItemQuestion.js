import {Box, Input, Text, TextArea} from 'native-base';
import React, {useState, useContext} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Colors from '../color';
import {CheckBox, Icon} from '@rneui/themed';
import AuthGlobal from './../context/store/AuthGlobal';

const {width, height} = Dimensions.get('window');

const ItemQuestion = props => {
  const {idbaitap, noidung, dapan, id, loai} = props;
  const context = useContext(AuthGlobal);
  //  ======================================================
  const [checkedSV, setCheckedSV] = useState(Array(dapan.length).fill(false));
  const [textAera, setTextAera] = useState([]);
  var [dapansv, setDapansv] = useState([]);
  var da = [];
  var sinhviennop = {
    masv: context.sinhvien.maso,
    idbaitap: idbaitap,
    idcauhoi: id,
    thoigian: '',
    dapansinhvien: da,
  };
  var [dapansvnop, setDapansvnop] = useState(sinhviennop);

  const handleSelectItem = (index, loai) => {
    if(loai === 'text')
    {
      handleTextAera();
      return;
    }
    const newCheckedSV =
      loai === 'radio' ? Array(dapan.length).fill(false) : [...checkedSV];
    newCheckedSV[index] = !newCheckedSV[index];
    if (loai === 'radio') {
      dapansvnop.dapansinhvien = [dapan[index]]; // Chỉ lưu một đáp án khi loại là "radio"
    } else if (loai === 'checkbox') {
      if (newCheckedSV[index]) {
        dapansv.push(dapan[index]);
      } else {
        const i = dapansv.indexOf(dapan[index]);
        if (i !== -1) {
          dapansv.splice(i, 1);
        }
      }
      dapansvnop.dapansinhvien = dapansv;
    } 
      
    setCheckedSV(newCheckedSV);
      const i = context.bainopsv.findIndex(
        d => d.idcauhoi === dapansvnop.idcauhoi,
      );
  
      if (i !== -1) {
        context.bainopsv.splice(i, 1);
        context.bainopsv.push(dapansvnop);
      } else {
        context.bainopsv.push(dapansvnop);
    }
  };
  const handleTextAera = () => {
    dapansvnop.dapansinhvien[0] = textAera;
    const i = context.bainopsv.findIndex(d => d.idcauhoi === dapansvnop.idcauhoi);
    if (i !== -1) {
      context.bainopsv[i] = dapansvnop;
    } else {
      context.bainopsv.push(dapansvnop);
    }
  };
  return (
    <View>
      <Box style={styles.container}>
        <View style={styles.questionBox}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.question}>Câu hỏi: </Text>
          </View>
          <Input
            style={styles.questionValue}
            multiline={true}
            variant="underlined"
            width="100%"
            numberOfLines={2}
            value={noidung}
            paddingBottom={-6}
            isDisabled={true}
          />
        </View>
        <View style={styles.listAsk}>
          {loai !== 'text' ? (
            dapan.map((item, index) => (
              <View key={index}>
                <View style={styles.container}>
                  <View style={{flexDirection: 'row'}}>
                    {loai === 'checkbox' ? (
                      <CheckBox
                        iconType="material-community"
                        checkedIcon="checkbox-outline"
                        uncheckedIcon="checkbox-blank-outline"
                        checked={checkedSV[index]}
                        onPress={() => handleSelectItem(index, loai)}
                      />
                    ) : (
                      <CheckBox
                        iconType=""
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                        checked={checkedSV[index]}
                        onPress={() => handleSelectItem(index, loai)}
                      />
                    )}
                    <Text style={styles.labelAsk}>{item}</Text>
                  </View>
                </View>
              </View>
            ))
          ) : (
            <View style={styles.textInput}>
              <TextArea
                style={styles.newInput}
                value={textAera}
                onChangeText={(e) => setTextAera(e)}
                onBlur={handleSelectItem(0, loai)}
                placeholder="Enter text"
              />
            </View>
          )}
        </View>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: width - 30,
    marginRight: 10,
    height: 'auto',
    display: 'flex',
    backgroundColor: Colors.white,
    shadowColor: Colors.gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 20,
    borderRadius: 14,
    marginBottom: 30,
  },
  questionBox: {
    margin: 10,
    flexDirection: 'column',
  },
  question: {
    fontSize: 16,
  },
  questionValue: {
    fontSize: 18,
    color: Colors.black,
  },
  mask: {
    color: Colors.red,
  },
  listAsk: {
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    width: width - 20,
    position: 'relative',
    height: 'auto',
    lineHeight: 40,
  },
  newInput: {
    position: 'relative',
    marginLeft: 10,
    marginRight: 10,
    borderBottomWidth: 0.5,
    borderColor: Colors.black,
    color: Colors.black,
    borderStyle: 'solid',
    width: width - 40,
    fontSize: 18,
    marginBottom: 10,
  },
  labelAsk: {
    marginTop: 12,
  },
});
export default ItemQuestion;
