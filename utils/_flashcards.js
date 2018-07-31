export const FLASHCARDS_STORAGE_KEY = 'FlashCards:flashcards'

export function formatDecks (results) {
    if (results === null) {
      return {}
    }
    return JSON.parse(results)
  }