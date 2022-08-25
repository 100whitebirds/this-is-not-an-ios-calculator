import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens/CalculatorScreen';
import { styles } from './src/styles/styles';

const App = () => {
  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
