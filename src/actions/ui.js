import { createAction } from "redux-actions";

export const updateCurrentCell = createAction("UPDATE_CURRENT_CELL", index => ({
  index
}));

export const keyInputted = createAction("KEY_INPUTTED", key => ({ key }));

export const updateHighlightedCells = createAction(
  "UPDATE_HIGLIGHTED_CELLS",
  cells => ({ cells })
);

export const cellSelected = createAction("CELL_SELECTED", cell => ({ cell }));

export const updateCurrentClue = createAction("UPDATE_CURRENT_CLUE", clue => ({
  clue
}));

export const updateCurrentDirection = createAction(
  "UPDATE_CURRENT_DIRECTION",
  direction => ({ direction })
);

export const clueListItemClicked = createAction(
  "CLUE_LIST_ITEM_CLICKED",
  (clueNum, direction) => ({ clueNum, direction })
);

export const updateUI = createAction(
  "UPDATE_UI",
  (nextCell, direction) => ({nextCell, direction})
);