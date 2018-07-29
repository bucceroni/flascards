//localStorage
import { AsyncStorage } from 'react-native'
import { FLASHCARDS_STORAGE_KEY, formatDecks } from './_flashcards'

export function fetchDecksResults(){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then(formatDecks)
}
 
export function submitDeck ({ key, newDeck }) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [key]: newDeck
  }))
}
//  export function removeEntry (key) {
//   return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
//     })
// } 