//localStorage
import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY, formatDecks } from './_flashcards'

export function getDecks(){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(formatDecks)
}
 
export function addDeck (deck) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
  [deck.title]: deck
  }))
}
