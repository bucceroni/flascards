import React from "react";
import { View, StatusBar } from "react-native";
import { Constants } from "expo";
import { gray, blue, white } from "./utils/colors";
import { Ionicons } from "@expo/vector-icons";

import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import Home from "./components/Home";
import AddDecks from "./components/AddDecks";
import About from "./components/About";

import Deck from "./components/Deck";
import AddCard from "./components/AddCard";
import Quiz from "./components/Quiz";

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

const Stack = createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  AddDecks: {
    screen: AddDecks
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: "Add Card",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz",
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1 }}>
          <FlashcardsStatusBar
            backgroundColor={blue}
            barStyle="light-content"
          />
          <Stack />
        </View>
      </Provider>
    );
  }
}
