import React from 'react';
import { View, Text } from 'react-native';
import { CalculatorButton } from '../components';
import { useCalculator } from '../hooks';
import { styles } from '../styles';

export const CalculatorScreen = () => {
  const {
    number,
    cleanUp,
    toggleSign,
    changeNumber,
    add,
    subtract,
    divide,
    multiply,
    calculatePercent,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <CalculatorButton text="C" color="#9B9B9B" action={cleanUp} />
        <CalculatorButton text="+/-" color="#9B9B9B" action={toggleSign} />
        <CalculatorButton text="%" color="#9B9B9B" action={calculatePercent} />
        <CalculatorButton text="÷" color="#FF9427" action={divide} />
      </View>

      <View style={styles.row}>
        <CalculatorButton text="7" action={changeNumber} />
        <CalculatorButton text="8" action={changeNumber} />
        <CalculatorButton text="9" action={changeNumber} />
        <CalculatorButton text="×" color="#FF9427" action={multiply} />
      </View>

      <View style={styles.row}>
        <CalculatorButton text="4" action={changeNumber} />
        <CalculatorButton text="5" action={changeNumber} />
        <CalculatorButton text="6" action={changeNumber} />
        <CalculatorButton text="-" color="#FF9427" action={subtract} />
      </View>

      <View style={styles.row}>
        <CalculatorButton text="1" action={changeNumber} />
        <CalculatorButton text="2" action={changeNumber} />
        <CalculatorButton text="3" action={changeNumber} />
        <CalculatorButton text="+" color="#FF9427" action={add} />
      </View>

      <View style={styles.row}>
        <CalculatorButton text="0" wide action={changeNumber} />
        <CalculatorButton text="," action={changeNumber} />
        <CalculatorButton text="=" color="#FF9427" action={calculateResult} />
      </View>
    </View>
  );
};
