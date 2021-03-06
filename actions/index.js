import * as types from "./types";

export function receiveDecks(decks){
    return {
        type: types.RECEIVE_DECKS,
        decks
    }
}

export function incrementDeck(deck){
    return {
        type: types.ADD_DECK,
        deck
    }
}