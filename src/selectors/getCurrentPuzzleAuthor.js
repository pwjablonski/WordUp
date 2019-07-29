import getCurrentPuzzle from './getCurrentPuzzle'

export default function getCurrentPuzzleAuthor(state) {
  const currentPuzzle = getCurrentPuzzle(state);
  if(currentPuzzle) {
    return currentPuzzle.author;
  }
  return null
}
