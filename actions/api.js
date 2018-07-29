import { AsyncStorage } from 'react-native'
export const FLASHCARDS_STORAGE_KEY = 'FlashCards:decks'

export function formatDecks (results) {
  if (results === null) {
    return {}
  }
  return JSON.parse(results)
}

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(formatDecks)
}

export function saveDeckTitle(deck) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [deck.title]: deck
  }))
}


//getDecks: retorna todos os baralhos com seus títulos, perguntas, e respostas. 
//saveDeckTitle: dado um único argumento title, ele adiciona-o aos baralhos. 
//--getDeck: dado um único argumento id, ele retorna o baralho associado àquele id. 
//--addCardToDeck: dado dois argumentos, title e card, ele adiciona o cartão à lista de perguntas ao baralho com o título associado. 