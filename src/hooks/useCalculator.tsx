import { useState } from 'react';

export enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

const formatToNumber = (str: string) => Number(str.replace(',', '.'));

const formatToString = (num: number) => String(num).replace('.', ',');

export const useCalculator = () => {
  const [prevNumber, setPrevNumber] = useState('0');
  const [number, setNumber] = useState('');
  const [activeOperator, setActiveOperator] = useState<Operators | null>(null);

  const cleanUp = () => {
    setNumber('0');
    setPrevNumber('0');
    setActiveOperator(null);
  };

  const changeNumber = (numberString: string) => {
    if (number.includes(',') && numberString === ',') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === ',') {
        setNumber(number + numberString);
      } else if (numberString === '0' && number.includes(',')) {
        setNumber(number + numberString);
      } else if (numberString !== '0' && !number.includes(',')) {
        setNumber(numberString);
      } else if (numberString === '0' && !number.includes(',')) {
        setNumber(number);
      } else {
        setNumber(number + numberString);
      }
    } else {
      setNumber(number + numberString);
    }
  };

  const toggleSign = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const shiftNumberToPrevious = () => {
    if (number.endsWith(',')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const applyOperator = (operator: Operators) => {
    if (prevNumber !== '0') {
      setActiveOperator(operator);
      calculateResult();
    } else {
      shiftNumberToPrevious();
      setActiveOperator(operator);
    }
  };

  const calculatePercent = () => {
    if (
      activeOperator === Operators.add ||
      activeOperator === Operators.subtract
    ) {
      const result =
        formatToNumber(prevNumber) * (formatToNumber(number) / 100);
      setNumber(formatToString(result));
    } else {
      const result = formatToNumber(number) / 100;
      setNumber(formatToString(result));
    }
  };

  const calculateResult = () => {
    const num1 = formatToNumber(number);
    const num2 = formatToNumber(prevNumber);
    let result = 0;

    switch (activeOperator) {
      case Operators.add:
        result = num2 + num1;
        break;
      case Operators.subtract:
        result = num2 - num1;
        break;
      case Operators.multiply:
        result = num2 * num1;
        break;
      case Operators.divide:
        result = num2 / num1;
        break;
    }
    setNumber(formatToString(result));
    setPrevNumber('0');
  };
  return {
    number,
    cleanUp,
    toggleSign,
    calculatePercent,
    changeNumber,
    applyOperator,
    calculateResult,
  };
};
