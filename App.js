import React from "react";
import { View, StatusBar } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import {createStore} from "redux"
import {Provider} from "react-redux"
import reducer from "./reducers"


import { Constants } from "expo";

import { gray, blue } from "./utils/colors";
import { Ionicons } from "@expo/vector-icons";

import Home from "./components/Home";
import AddDecks from "./components/AddDecks";
import About from "./components/About";


function FlashcardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ focused, tintColor }) => {
          iconName = `ios-home${focused ? "" : "-outline"}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }
    },
    AddDecks: {
      screen: AddDecks,
      navigationOptions: {
        tabBarLabel: "Add Decks",
        tabBarIcon: ({ focused, tintColor }) => {
          iconName = `ios-add${focused ? "" : "-outline"}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }
    },
    About: {
      screen: About,
      navigationOptions: {
        tabBarLabel: "About",
        tabBarIcon: ({ focused, tintColor }) => {
          iconName = `ios-information${focused ? "" : "-outline"}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: blue,
      inactiveTintColor: gray
    }
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashcardsStatusBar
            backgroundColor={blue}
            barStyle="light-content"
          />
          <Tabs/>
        </View>
        </Provider>
    );
  }
}
