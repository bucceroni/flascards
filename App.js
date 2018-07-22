import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import Home from "./components/Home";
import AddFlashcards from "./components/AddFlashcards";

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'Home',
    },
  },
  AddFlashcards: {
    screen: AddFlashcards,
    navigationOptions: {
      tabBarLabel: 'AddFlashcards',
    },
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tabs/>
      </View>
    );
  }
}
