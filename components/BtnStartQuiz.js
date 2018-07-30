import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import { blue, white, gray } from "../utils/colors";

  export default function BtnStartQuiz({ onPress, disabled }) {
    let styleButton = disabled ? styles.buttonDisabled : styles.button;
  
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled} style={styleButton}>
        <Text style={styles.text}>Start Quiz</Text>
      </TouchableOpacity>
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
  buttonDisabled: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 250,
    height: 60,
    margin: 10,
    backgroundColor: gray
  },
  text: {
    color: white,
    fontSize: 14
  }
});

