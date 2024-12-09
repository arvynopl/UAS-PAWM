import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashScreenComponent = ({ navigation }) => {
  useEffect(() => {
    // Hide the native splash screen (if using react-native-splash-screen)
    SplashScreen.hide();

    // Navigate to the main screen after a delay
    const timeout = setTimeout(() => {
      navigation.replace('MainScreen'); // Adjust to your main screen route
    }, 3000); // Animation duration (adjust if necessary)

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('./Flow 1.json')} // Replace with your JSON file's path
        autoPlay
        loop={false} // Set to true if you want the animation to loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Adjust to match your theme
  },
});

export default SplashScreenComponent;
