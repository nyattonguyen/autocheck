import React from 'react';
import {Dimensions} from 'react-native';
import {View, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  Extrapolate,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

export default function CircleAnimation() {
  const rotateX1 = useSharedValue(0);
  const rotateY1 = useSharedValue(0);
  const rotateZ1 = useSharedValue(0);

  const rotateX2 = useSharedValue(0);
  const rotateY2 = useSharedValue(0);
  const rotateZ2 = useSharedValue(0);

  const AnimatedView = Animated.createAnimatedComponent(View);

  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {perspective: 1000},
        {rotateX: `${rotateX1.value}deg`},
        {rotateY: `${rotateY1.value}deg`},
        {rotateZ: `${rotateZ1.value}deg`},
        {translateX: 150},
        {translateY: 150},
      ],
    };
  });

  const animatedStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        {perspective: 1000},
        {rotateX: `${rotateX2.value}deg`},
        {rotateY: `${rotateY2.value}deg`},
        {rotateZ: `${rotateZ2.value}deg`},
        {translateX: -100},
        {translateY: -100},
      ],
    };
  });

  React.useEffect(() => {
    rotateX1.value = withRepeat(
      withTiming(-7200, {
        duration: 30000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
    rotateY1.value = withRepeat(
      withTiming(7200, {
        duration: 30000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
    rotateZ1.value = withRepeat(
      withTiming(7200, {
        duration: 30000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );

    rotateX2.value = withRepeat(
      withTiming(-7200, {
        duration: 30000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
    rotateY2.value = withRepeat(
      withTiming(7200, {
        duration: 30000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
    rotateZ2.value = withRepeat(
      withTiming(-7200, {
        duration: 30000,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);

  return (
    <View style={styles.container}>
      <AnimatedView style={[styles.circle1, animatedStyle1]} />
      <AnimatedView style={[styles.circle2, animatedStyle2]} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: width,
    height: height,
  },
  circle1: {
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: 'red',
  },
  circle2: {
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'transparent',
    borderWidth: 5,
    borderColor: 'white',
    position: 'absolute',
  },
});
