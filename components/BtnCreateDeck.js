import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { blue, white, gray } from "../utils/colors";

export default function BtnCreateDeck({ onPress, disabled }) {
  let styleButton = disabled ? styles.buttonDisabled : styles.button;

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styleButton}>
      <Text style={styles.text}>Save</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: blue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 200,
    height: 50,
    margin: 10,
  },
  buttonDisabled: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    width: 200,
    height: 50,
    margin: 10,
    padding: 5,
    backgroundColor: gray
  },
  text: {
    color: white,
    fontSize: 14
  }
});
