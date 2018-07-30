import React, { Component } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { blue } from "../utils/colors";

import { connect } from "react-redux";


import { addDeck, getDecks } from "../utils/api";
import { receiveDecks } from "../actions";

import BtnCreateDeck from "./BtnCreateDeck";

class AddCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: "",
      disabledQuestion: true,
      disabledAnswer: true,
    };
  }

  onChangeQuestion = question => {
    if (question === "") {
      this.setState({ question, disabledQuestion: true });
    } else {
      this.setState({ question, disabledQuestion: false });
    }
  };

  onChangeAnswer = answer => {
    if (answer === "") {
      this.setState({ answer, disabledAnswer: true });
    } else {
      this.setState({ answer, disabledAnswer: false });
    }
  };

  addQuestion = () => {
    const { question, answer } = this.state
    const { dispatch, decks } = this.props
    const {key} = this.props.navigation.state.params

      const deck = decks[key]
      deck.questions.push({
        question,
        answer
      })
  
      addDeck(deck).then(() => {
        getDecks().then((decksUpdated) => {
          dispatch(receiveDecks(decksUpdated))
          this.props.navigation.navigate('Deck', { key })
        })
      })
    
  }

  render() {
    const { question, answer, disabledAnswer, disabledQuestion } = this.state;

    return (
      <View style={styles.start}>
      <Text style={styles.title}>Create new question</Text>
      <View style={styles.center}>
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          placeholder="Question"
          onChangeText={question => this.onChangeQuestion(question)}
          value={question}
        />
        <TextInput
          style={styles.textInput}
          autoFocus={true}
          placeholder="Answer"
          onChangeText={answer => this.onChangeAnswer(answer)}
          value={answer}
        />
         <BtnCreateDeck onPress={this.addQuestion} disabled={disabledAnswer || disabledQuestion} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  start: { flex: 1, justifyContent: "flex-start", alignItems: "center" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: {
    color: blue,
    fontSize: 16,
    marginTop: 20
  },
  textInput: {
    width: 200,
    height: 50, 
    margin: 10
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(AddCard);

