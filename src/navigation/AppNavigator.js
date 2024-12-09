import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen'; // Import SplashScreen
import HomeScreen from '../screens/HomeScreen'; // Import HomeScreen

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Splash Screen */}
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
      />

      {/* Home Screen */}
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          headerShown: true,
          title: 'Virtual Lab Pengenalan Komputasi',
          headerStyle: {
            backgroundColor: '#4D2C5E',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;
