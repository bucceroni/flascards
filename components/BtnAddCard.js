import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { orange, white } from "../utils/colors";

export default function BtnAddQuestion({ onPress }) {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonTitle}>Add Card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: orange,
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
