import * as types from "../actions/types";

const initialState = {
  decks:
    {
      React: {
        title: "React",
        questions: [
          {
            question: "What is React?",
            answer: "A library for managing user interfaces"
          },
          {
            question: "Where do you make Ajax requests in React?",
            answer: "The componentDidMount lifecycle event"
          }
        ]
      },
      JavaScript: {
        title: "JavaScript",
        questions: [
          {
            question: "What is a closure?",
            answer:
              "The combination of a function and the lexical environment within which that function was declared."
          }
        ]
      }
    }
  
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `${types.GET_DECKS}`:
      return {
        ...state,
        decks: payload
      };
    case `${types.ADD_DECKS}`:
      return {
        ...state,
        decks: payload
      };
    default:
      return state;
  }
}
