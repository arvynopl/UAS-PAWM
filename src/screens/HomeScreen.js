import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get device screen dimensions

function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Background */}
      <View style={styles.background} />

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome back!</Text>

      {/* Email and Password Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Email</Text>
        </View>
        <View style={styles.inputBox}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordMask} />
        </View>
      </View>

      {/* Forgot Password */}
      <Text style={styles.forgotPassword}>Forgot password?</Text>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Section */}
      <Text style={styles.signUpText}>
        <Text style={styles.signUpRegular}>Don't have an account? </Text>
        <Text style={styles.signUpHighlight}>Sign up</Text>
      </Text>

      {/* Divider */}
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <View style={styles.dividerTextContainer}>
          <Text style={styles.dividerText}>or</Text>
        </View>
      </View>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        <View style={styles.socialButton}>
          <View style={styles.facebookIcon} />
        </View>
        <View style={styles.socialButton}>
          <View style={styles.googleIcon} />
        </View>
        <View style={styles.socialButton}>
          <View style={styles.appleIcon} />
        </View>
      </View>

      {/* Placeholder Image */}
      <Image
        source={require('../../assets/icon2.png')}
        style={styles.placeholderImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFE',
    position: 'relative',
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#FDFDFD',
    position: 'absolute',
  },
  welcomeText: {
    position: 'absolute',
    top: height * 0.24, // Adjusted for iPhone 11
    left: width * 0.2,
    textAlign: 'center',
    color: 'black',
    fontSize: width * 0.065, // Responsive font size
    fontFamily: 'Work Sans',
    fontWeight: '400',
    lineHeight: width * 0.09, // Adjusted line height
    letterSpacing: 0.8,
  },
  inputContainer: {
    position: 'absolute',
    top: height * 0.35,
    left: width * 0.05,
  },
  inputBox: {
    width: width * 0.9,
    height: height * 0.065,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: height * 0.02,
    justifyContent: 'center',
    paddingLeft: width * 0.04,
  },
  inputLabel: {
    color: 'black',
    fontSize: width * 0.045,
    fontFamily: 'Work Sans',
    fontWeight: '400',
  },
  passwordMask: {
    width: width * 0.06,
    height: height * 0.015,
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    right: width * 0.04,
    top: '50%',
    transform: [{ translateY: -height * 0.0075 }],
  },
  forgotPassword: {
    position: 'absolute',
    top: height * 0.45,
    left: width * 0.6,
    textAlign: 'right',
    color: 'black',
    fontSize: width * 0.035,
    fontFamily: 'Work Sans',
    fontWeight: '400',
  },
  loginButton: {
    position: 'absolute',
    top: height * 0.51,
    left: width * 0.05,
    width: width * 0.9,
    height: height * 0.075,
    backgroundColor: '#4D2C5E',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: width * 0.05,
    fontFamily: 'Work Sans',
    fontWeight: '700',
  },
  signUpText: {
    position: 'absolute',
    top: height * 0.77,
    left: width * 0.2,
    textAlign: 'center',
    fontSize: width * 0.045,
  },
  signUpRegular: {
    color: 'black',
    fontFamily: 'Work Sans',
    fontWeight: '400',
  },
  signUpHighlight: {
    color: '#0098FF',
    fontWeight: '700',
  },
  divider: {
    position: 'absolute',
    top: height * 0.6,
    left: width * 0.05,
    width: width * 0.9,
    alignItems: 'center',
  },
  dividerLine: {
    width: '100%',
    height: 0,
    borderBottomWidth: 0.5,
    borderColor: 'black',
    opacity: 0.21,
  },
  dividerTextContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    paddingHorizontal: width * 0.02,
  },
  dividerText: {
    color: 'black',
    fontSize: width * 0.04,
    fontFamily: 'Work Sans',
    fontWeight: '400',
  },
  socialContainer: {
    position: 'absolute',
    top: height * 0.65,
    left: width * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
  },
  socialButton: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1.36,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookIcon: {
    width: '100%',
    height: '100%',
    backgroundColor: '#1877F2',
  },
  googleIcon: {
    width: '100%',
    height: '100%',
    backgroundColor: '#EA4335',
  },
  appleIcon: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  placeholderImage: {
    position: 'absolute',
    top: height * 0.07,
    left: width * 0.2,
    width: width * 0.5,
    height: height * 0.2,
  },
});

export default HomeScreen;
