import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

import { connect } from "react-redux";
import { addDeck } from "../actions/index";

import BtnCreateDeck from "./BtnCreateDeck";
import { blue } from "../utils/colors";

import { submitDeck } from "../utils/api";

class AddDecks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      disabled: true
    };
  }

  onChangeText = title => {
    if (title === "") {
      this.setState({ title, disabled: true });
    } else {
      this.setState({ title, disabled: false });
    }
  };

  createDeck = () => {
    const { title } = this.state;
    const key = title;
    const newDeck = { title: key, questions: [] };

    this.props.dispatch(
      addDeck({
        [key]: newDeck
      })
    );

    submitDeck(key, newDeck);

    this.setState({ title: "" });
  };

  render() {
    const { disabled, title } = this.state;

    return (
      <View style={styles.start}>
        <Text style={styles.title}>Create new deck</Text>
        <View style={styles.center}>
          <TextInput
            style={styles.textInput}
            placeholder="Deck Title"
            autoFocus={true}
            onChangeText={text => this.onChangeText(text)}
            value={title}
          />
          <BtnCreateDeck onPress={this.createDeck} disabled={disabled} />
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
    margin: 20
  },
  textInput: {
    width: 200,
    height: 50
  }
});

export default connect()(AddDecks);
