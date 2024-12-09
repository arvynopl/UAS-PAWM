import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { View, LogBox, Platform } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import LottieView from 'lottie-react-native';

// Ignore specific yellow box warnings that might not be relevant for production
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

// Create an error boundary component to catch and handle React rendering errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to your preferred error tracking service here
    console.error('App Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Something went wrong. Please restart the app.</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync().catch(() => {
  /* Ignore errors as they don't affect app functionality */
});

export default function App() {
  // Track whether the app is ready to be displayed
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Add your resource loading tasks here
        await Promise.all([
          // Example resource loading tasks:
          // Font.loadAsync({ ... }),
          // Asset.loadAsync([...]),
          // Preload any data from AsyncStorage
          
          // Ensure splash screen shows for at least 2 seconds
          new Promise(resolve => setTimeout(resolve, 2000))
        ]);
      } catch (e) {
        console.error('Error loading resources:', e);
        // Even if there's an error, we want to continue loading the app
        // But you might want to log this to an error reporting service
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  // Handle the layout effect to hide the splash screen
  const onLayoutRootView = React.useCallback(async () => {
    if (appIsReady) {
      try {
        await SplashScreen.hideAsync();
      } catch (e) {
        console.error('Error hiding splash screen:', e);
        // Continue even if hiding splash screen fails
      }
    }
  }, [appIsReady]);

  // Don't render anything until we're ready
  if (!appIsReady) {
    return null;
  }

  // Wrap everything in the error boundary and return the app
  return (
    <ErrorBoundary>
      <View 
        style={{ flex: 1, backgroundColor: '#4D2C5E' }} 
        onLayout={onLayoutRootView}
      >
        <NavigationContainer
          fallback={<View style={{ flex: 1, backgroundColor: '#4D2C5E' }} />}
          onStateChange={(state) => {
            // Optional: track screen changes here
            try {
              const currentRouteName = state?.routes[state.routes.length - 1]?.name;
              // You could log the screen change to analytics here
            } catch (e) {
              // Ignore any errors in navigation state handling
            }
          }}
        >
          <AppNavigator />
        </NavigationContainer>
      </View>
    </ErrorBoundary>
  );
}