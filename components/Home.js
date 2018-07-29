import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { connect } from "react-redux"

import BtnDecks from "./BtnDecks";
import { blue } from "../utils/colors";

import {receiveDecks} from "../actions/index"
import {fetchDecksResults} from  "../utils/api";

class Home extends React.Component {
  componentDidMount(){
    const {dispatch} = this.props
    fetchDecksResults().then((decks => dispatch(receiveDecks(decks))))
  }

  openDeck = () => {
    //navigation to Deck
  };

  render() {
    const {decks} = this.props

    return (
      <View style={styles.start}>
       <Text>{JSON.stringify(decks)}</Text>

        <Text style={styles.title}>Select one deck and have fun !!!</Text>
        <View style={styles.start}>
          {Object.keys(decks).map(key => {
            const { questions } = decks[key];
            return (
              <BtnDecks
                key={key}
                title={key}
                questions={questions}
                onPress={this.openDeck}
              />
            );
          })}
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

function mapStateToProps (decks){
 return{
   decks
 }
}


export default connect(mapStateToProps)(Home)