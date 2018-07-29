import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { blue, white } from "../utils/colors";

export default function BtnDecks({ title, questions, onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
        <Text style={styles.buttonText}>{questions.length} cards</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: blue,
    borderRadius: 5,
    width: 250,
    height: 60,
    margin: 10
  },
  buttonTitle: {
    color: white,
    fontSize: 14
  },
  buttonText: {
    color: white,
    fontSize: 12
  }
});
