import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { gray, blue, red, green } from "../utils/colors";
import BtnQuiz from "./BtnQuiz";
import { clearLocalNotification, setLocalNotification } from "../utils/helpers";

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, correctAnswerCount: 0 };
  }

  componentDidMount() {
    const { key } = this.props.navigation.state.params;
    this.setState({
      deck: this.props.decks[key],
      questionIndex: 0,
      showAnswer: false
    });
  }

  handleShowAnswer = () => {
    this.setState({ showAnswer: !this.state.showAnswer });
  };

  handleCorrect = () => {
    this.setState({
      correctAnswerCount: this.state.correctAnswerCount + 1,
      showAnswer: false,
      questionIndex: this.state.questionIndex + 1
    });
    this.setNotifications();
  };

  handleIncorrect = () => {
    this.setState({
      showAnswer: false,
      questionIndex: this.state.questionIndex + 1
    });
    this.setNotifications();
  };

  showAnswer() {
    const { correctAnswerCount, deck } = this.state;
    return `${(correctAnswerCount / deck.questions.length) * 100} %`;
  }

  handleRestartQuiz = () => {
    this.setState({
      questionIndex: 0,
      showAnswer: false,
      correctAnswerCount: 0
    });
  };

  handleBackToDeck = () => {
    this.props.navigation.goBack();
  };

  setNotifications() {
    const { deck, questionIndex } = this.state;
    if (questionIndex > deck.questions.length) {
      clearLocalNotification().then(setLocalNotification);
    }
  }

  render() {
    const { deck, questionIndex, showAnswer } = this.state;
    if (deck) {
      return (
        <View style={styles.item}>
          {questionIndex < deck.questions.length ? (
            <View>
              <Text style={styles.questionCount}>
                {questionIndex + 1} / {deck.questions.length}
              </Text>
              <Text style={styles.text}>
                {showAnswer
                  ? deck.questions[questionIndex].answer
                  : deck.questions[questionIndex].question}
              </Text>
              <BtnQuiz
                onPress={this.handleShowAnswer}
                disabled={showAnswer}
                style={
                  showAnswer
                    ? styles.buttonDisabled
                    : styles.button
                }
              >
                {showAnswer ? "Answer" : "Show Answer"}
              </BtnQuiz>
              <BtnQuiz
                onPress={this.handleCorrect}
                disabled={!showAnswer}
                style={
                  showAnswer
                    ? styles.buttonCorrect
                    : styles.buttonDisabledCorrect
                }
              >
                CORRECT
              </BtnQuiz>
              <BtnQuiz
                onPress={this.handleIncorrect}
                disabled={!showAnswer}
                style={
                  showAnswer
                    ? styles.buttonIncorrect
                    : styles.buttonDisabledIncorrect
                }
              >
                INCORRECT
              </BtnQuiz>
            </View>
          ) : (
            <View style={styles.item}>
              <Text style={styles.text}>Your result: {this.showAnswer()}</Text>
              <BtnQuiz onPress={this.handleRestartQuiz} style={styles.button}>
                RESTART QUIZ
              </BtnQuiz>
              <BtnQuiz onPress={this.handleBackToDeck} style={styles.button}>
                BACK TO DECK
              </BtnQuiz>
            </View>
          )}
        </View>
      );
    }
    return <View />;
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 25
  },
  questionCount: {
    textAlign: "right"
  },
  buttonCorrect: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: green,
    borderRadius: 5,
    width: 250,
    height: 60,
    margin: 10
  },
  buttonIncorrect: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: red,
    borderRadius: 5,
    width: 250,
    height: 60,
    margin: 10
  },
  buttonDisabledCorrect: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: gray,
    borderRadius: 5,
    width: 250,
    height: 60,
    margin: 10
  },
  buttonDisabledIncorrect: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: gray,
    borderRadius: 5,
    width: 250,
    height: 60,
    margin: 10
  },
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
    backgroundColor: gray,
    borderRadius: 5,
    width: 250,
    height: 60,
    margin: 10
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Quiz);
