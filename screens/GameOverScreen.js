import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const GameOverScreen = props => {

  return (
    <View style={styles.screen}>
      <Text>Game Over Rafiki!</Text>
      <Text>Number of Rounds: {props.numRounds} </Text>
      <Text>Original Number: {props.userNum} </Text>
      <TouchableOpacity onPress={props.onRestart}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start New Game</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderWidth: 2,
    borderColor: Colors.primary,
    width: '50%',
    marginTop: 20,
    padding: 15,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});

export default GameOverScreen;