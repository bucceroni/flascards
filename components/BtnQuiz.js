import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { blue, white } from "../utils/colors";

export default function BtnAddQuestion({ onPress, children, disabled, style }) {
  return (
    <View>
      <TouchableOpacity disabled={disabled} style={style} onPress={onPress}>
        <Text style={styles.buttonTitle}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonTitle: {
    color: white,
    fontSize: 14
  }
});
