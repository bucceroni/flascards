import React from "react";
import { View, Text, StyleSheet } from "react-native";

import BtnDecks from "./BtnDecks";
import { blue } from "../utils/colors";

class Home extends React.Component {
  render() {
    return (
      <View style={styles.start}>
        <Text style={styles.title}>Select one deck and have fun !!!</Text>
        <View style={styles.center}>
          <BtnDecks />
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
  }
});

export default Home