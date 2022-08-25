import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  resultSmall: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 50,
    justifyContent: 'center',
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
  },
  row: {
    marginBottom: 18,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
