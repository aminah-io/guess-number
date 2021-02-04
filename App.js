import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header.js'
import StartGameScreen from './screens/StartGameScreen.js';
import GameScreen from './screens/GameScreen.js';
import GameOverScreen from './screens/GameOverScreen.js';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [roundsCount, setRoundsCount] = useState(0);

  const configureNewGameHandler = () => {
    setRoundsCount(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = numOfRounds => {
    setRoundsCount(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && roundsCount <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (roundsCount > 0) {
    content = <GameOverScreen numRounds={roundsCount} userNum={userNumber} onRestart={configureNewGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess the Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
