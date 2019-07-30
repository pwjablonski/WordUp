import { createLogic } from "redux-logic";
import { getHighlightedLetters } from "../selectors";
import fetchWordsBySpelling from "../clients/datamuse"
import { wordsLoaded } from "../actions";

export default createLogic({
  type: "FETCH_WORDS",
  async process({getState, action}, dispatch, done) {
    const state = getState()
    const letters = getHighlightedLetters(state)
    if(letters){
      const query = letters.replace(/ /g, "").replace(/_/g, "?")
      const words = await fetchWordsBySpelling(query)
      dispatch(wordsLoaded(words))
    } else {
      dispatch(wordsLoaded([]))
    }
    
    done();
  }
});