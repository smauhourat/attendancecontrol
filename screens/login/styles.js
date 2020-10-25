import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginTop: 10,
    color: 'black',
    backgroundColor: '#fff',
  },
  button: {
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'green',
  },
  buttonPrimary: {
    backgroundColor: 'blue',
  },
  textButton: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default styles;
