import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GameOverScreen = ({ rounds, answer, onRestart }) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Text>Number of rounds: {rounds}</Text>
      <Text>Correct number was: {answer}</Text>
      <Button title="New Game" onPress={onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
