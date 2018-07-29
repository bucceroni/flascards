import api from "./api";
import * as types from "./types";

export function getDecks() {
  return dispatch => {
    dispatch({
      type: types.GET_DECKS,
      payload: api.getDecks()
    });
  };
}

export function saveDeckTitle(title) {
  const deck = {
    title: title,
    questions: []
  };
  return dispatch => {
    dispatch({
      type: types.ADD_DECKS,
      payload: api.saveDeckTitle(deck)
    });
  };
}

