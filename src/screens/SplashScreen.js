import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home'); // Ensure "Home" matches the screen name in your AppNavigator
    }, 9000); // 3 seconds splash duration

    return () => clearTimeout(timer); // Cleanup timer when the component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/fix.json')} // Path to your Lottie JSON file
        autoPlay
        loop={false} // Set to false if you want the animation to stop after one iteration
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Same background color as in App.js
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 1000, // Adjust to fit your design
    height: 1000,
  },
});

export default SplashScreen;
