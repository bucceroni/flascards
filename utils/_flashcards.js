export const FLASHCARDS_STORAGE_KEY = 'FlashCards:decks'

export function formatDecks (results) {
    if (results === null) {
      return {}
    }
    return JSON.parse(results)
  }