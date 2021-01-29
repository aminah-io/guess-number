import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const Card = props => {
  return (
    <View style={{...styles.card, ...props.style}}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.23,
    shadowRadius: 6,
    backgroundColor: '#fff',
    elevation: 5,
    padding: 15,
    borderRadius: 5
  },
});

export default Card;