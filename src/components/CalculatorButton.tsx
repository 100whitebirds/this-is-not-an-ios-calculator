import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

type Props = {
  text: string;
  color?: string;
  wide?: boolean;
  action: (text: string) => void;
};

export const CalculatorButton = ({
  text,
  color = '#2D2D2D',
  wide = false,
  action,
}: Props) => (
  <TouchableOpacity onPress={() => action(text)}>
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.button,
        backgroundColor: color,
        width: wide ? 180 : 80,
      }}>
      <Text
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.buttonText,
          color: color === '#9B9B9B' ? 'black' : 'white',
        }}>
        {text}
      </Text>
    </View>
  </TouchableOpacity>
);
