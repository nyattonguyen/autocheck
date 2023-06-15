  import { Image, View } from "native-base";
  import React from "react";
  import { StyleSheet } from "react-native";
  import FastImage from 'react-native-fast-image';
import Colors from "../color";
  const Loading = () => {
    return (
      <View style={styles.container}>

        <FastImage
          style={{ width: 300, height: 400 , borderRadius: 150}}
          source={{
              uri:'https://i.pinimg.com/originals/90/80/60/9080607321ab98fa3e70dd24b2513a20.gif',
              headers: { Authorization: 'someAuthToken' },
              priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
      />
      </View>
      
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      backgroundColor: Colors.black,
      opacity:0.6,
      width: 400,
      height: 400
    }
  })
  export default Loading;