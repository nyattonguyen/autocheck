import React from 'react';
import { StyleSheet, Pressable, Animated } from 'react-native';
import { useTabBar } from '@react-navigation/bottom-tabs';
import Colors from '../color';

const CustomTab = ({ children }) => {
  const { navigation, state } = useTabBar();

  const onPress = (routeName) => {
    const selectedTab = state.routes[state.index].name;
    if (selectedTab !== routeName) {
      navigation.navigate(routeName);
    }
  };

  const tabWidth = state.layout.width / state.routes.length;
  const tabX = state.index * tabWidth;

  const circlePosition = new Animated.Value(tabX + tabWidth / 2 - 37);

  const moveCircle = (routeIndex) => {
    Animated.timing(circlePosition, {
      toValue: routeIndex * tabWidth + tabWidth / 2 - 37,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    moveCircle(state.index);
  }, [state.index]);

  return (
    <Pressable
      onPress={() => onPress(state.routes[0].name)}
      style={[styles.tab, { transform: [{ translateX: circlePosition }] }]}
      h={74}
      w={74}
      rounded="full"
      borderWidth={3}
      borderColor={Colors.white}
      bg={Colors.orange}
      top={-30}
      shadow={2}
    >
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tab: {
    elevation: 3,
    backgroundColor: Colors.white,
    height: 60,
    paddingTop: 5,
  },
});

export default CustomTab;
