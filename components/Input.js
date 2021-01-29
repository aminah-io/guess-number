import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
  return (
    <TextInput {...props} style={{ ...styles.input, ...props.styles }} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    width: '50%',
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 19
  },
});

export default Input;