// ./src/navigation/AppNavigator.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { 
  createStackNavigator, 
  StackNavigationOptions,
  CardStyleInterpolators 
} from '@react-navigation/stack';
import { 
  NavigationContainer,
  DefaultTheme,
  NavigationContainerRef 
} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';

// Define navigation types
export type RootStackParamList = {
  Home: undefined;
  // Add other screens here as needed
};

// Create navigation ref for usage outside of component
export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();

const Stack = createStackNavigator<RootStackParamList>();

// Custom error boundary component
class NavigationErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Navigation Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Navigation error occurred. Please restart the app.
          </Text>
        </View>
      );
    }
    return this.props.children;
  }
}

// Custom theme
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4D2C5E',
    background: '#FFFFFF',
    card: '#4D2C5E',
    text: '#FFFFFF',
    border: '#4D2C5E',
  },
};

// Screen options with proper typing
const screenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#4D2C5E',
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  headerTitleAlign: 'center',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  cardStyle: {
    backgroundColor: '#fff',
  },
  gestureEnabled: true,
  gestureDirection: 'horizontal',
};

function AppNavigator() {
  return (
    <NavigationErrorBoundary>
      <NavigationContainer 
        ref={navigationRef}
        theme={customTheme}
        fallback={<View style={styles.loadingContainer} />}
        onStateChange={(state) => {
          try {
            // Add navigation state tracking here if needed
            const currentRouteName = state?.routes[state.routes.length - 1]?.name;
            // You can implement analytics or state tracking here
          } catch (error) {
            console.warn('Navigation state handling error:', error);
          }
        }}
      >
        <Stack.Navigator 
          initialRouteName="Home"
          screenOptions={screenOptions}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              title: 'Lab Virtual TPB',
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationErrorBoundary>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  errorText: {
    color: '#4D2C5E',
    fontSize: 16,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: '#4D2C5E',
  },
});

export default AppNavigator;