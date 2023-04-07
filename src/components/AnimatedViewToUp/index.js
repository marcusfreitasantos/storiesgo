import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export default function AnimatedViewToUp({children}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        useNativeDriver: true,
        toValue: 1,
        duration: 300,
      }).start();
    };
    fadeIn();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateY: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [100, 0],
            }),
          },
        ],
      }}>
      {children}
    </Animated.View>
  );
}
