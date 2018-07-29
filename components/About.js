import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { blue } from "../utils/colors";

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.start}>
        <Text style={styles.title}>Project overview</Text>
        <View style={styles.center}>
          <Text style={styles.text}>
            Allows users to study a collection of flashcards. With the app, the
            different categories of flashcards called "decks", add flashcards to
            these decks, and make the quizes in these decks.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  start: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {
    color: blue,
    fontSize: 16,
    margin: 20
  },
  text: {
    textAlign: "center",
    color: blue,
    fontSize: 14,
    margin: 20
   
  }
});
