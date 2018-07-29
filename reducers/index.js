import * as types from "../actions/types";

const initialState = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
  }

export default function decks(state = initialState , action) {
  switch (action.type) {
    case types.RECEIVE_DECKS:
      return {
          ...state,
          ...action.decks
      };
    case types.ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    default:
      return state;
  }
}
