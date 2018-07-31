import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { blue } from "../utils/colors";

import { connect } from "react-redux";

import BtnAddCard from "./BtnAddCard";
import BtnStartQuiz from "./BtnStartQuiz";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null };
  }

  componentDidMount() {
    const { key } = this.props.navigation.state.params;
    this.setState({ deck: this.props.decks[key] });
  }

  static navigationOptions = ({ navigation }) => {
    const { key } = navigation.state.params;
    return { title: key };
  };

  navigationAddCard = () => {
    const { key } = this.props.navigation.state.params;
    this.props.navigation.navigate("AddCard", { key });
  };

  navigationQuiz = () => {
    const { key } = this.props.navigation.state.params;
    this.props.navigation.navigate("Quiz", { key });
  };

  render() {
    const { deck } = this.state;
    const { decks } = this.props;
    const { key } = this.props.navigation.state.params;

    if (deck) {
      return (
        <View style={styles.item}>
          <Text style={styles.title}>Flashcard: {deck.title}</Text>
          <Text style={styles.title}>
            Cards/Questions:{" "}
            {deck.questions.length <= decks[key].questions.length
              ? decks[key].questions.length
              : deck.questions.length}{" "}
          </Text>
          <View style={styles.button}>
            <BtnAddCard onPress={this.navigationAddCard} />
            <BtnStartQuiz
              onPress={this.navigationQuiz}
              disabled={deck.questions.length <= 0}
            />
          </View>
        </View>
      );
    }
    return (
      <View/>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 70,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: blue,
    fontSize: 20
  },
  button: {
    marginTop: 100
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Deck);
