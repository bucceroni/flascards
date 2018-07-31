import React from "react";
import { View, StyleSheet, ScrollView, Animated } from "react-native";

import { connect } from "react-redux";

import BtnDecks from "./BtnDecks";
import { blue } from "../utils/colors";

import { receiveDecks } from "../actions";
import { getDecks } from "../utils/api";

class Home extends React.Component {
  state = {
    bounceValue: new Animated.Value(1)
  };

  componentDidMount() {
    const { dispatch } = this.props;
    getDecks().then(decks => dispatch(receiveDecks(decks)));
  }

  openDeck = key => {
    const { navigation } = this.props;
    const { bounceValue } = this.state;

    Animated.sequence([
      Animated.timing(bounceValue, { duration: 800, toValue: 90 }),
      Animated.spring(bounceValue, { toValue: 1, friction: 4 })
    ]).start();

    navigation.navigate("Deck", { key });
  };

  render() {
    const { decks } = this.props;
    const { bounceValue } = this.state;

    return (
      <View style={styles.start}>
        <Animated.Text
          style={[
            styles.direction,
            styles.title,
            { transform: [{ scale: bounceValue }] }
          ]}
        >
          Select one deck and have fun !!!
        </Animated.Text>
        <ScrollView>
          {Object.keys(decks).map(key => {
            const { questions } = decks[key];
            return (
              <BtnDecks
                key={key}
                title={key}
                questions={questions}
                onPress={() => this.openDeck(key)}
              />
            );
          })}
        </ScrollView>
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

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Home);
