import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export default function AnimatedViewToLeft({children}) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const slideToLeft = () => {
      Animated.timing(fadeAnim, {
        useNativeDriver: true,
        toValue: 1,
        duration: 300,
      }).start();
    };
    slideToLeft();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        transform: [
          {
            translateX: fadeAnim.interpolate({
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
