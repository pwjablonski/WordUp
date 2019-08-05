import { createAction } from "redux-actions";

export const puzzleCreated = createAction("PUZZLE_CREATED", 
    (puzzleKey, user) => ({puzzleKey, user})
);

export const createPuzzle = createAction("CREATE_PUZZLE");

export const updateCellFill = createAction("UPDATE_CELL_FILL",
    (currentPuzzleKey, cell, fill) => ({currentPuzzleKey, cell, fill}),
    (_currentPuzzleKey, _cell, _fill, timestamp = Date.now()) => ({timestamp}),
);

export const updatePuzzle = createAction("UPDATE_PUZZLE",
    (key) => ({key})
);

export const gridUpdated = createAction("GRID_UPDATED",
    (currentPuzzleKey, grid, clues) => ({currentPuzzleKey, grid, clues}),
    (_currentPuzzleKey, _grid, _clues, timestamp = Date.now()) => ({timestamp}),
);

export const clueTextChanged = createAction("CLUE_TEXT_CHANGED",
    (currentPuzzleKey, direction, index, value) =>
    ({currentPuzzleKey, direction, index, value}),
    (_currentPuzzleKey, _direction, _index, _value, timestamp = Date.now()) => ({timestamp}),
);

export const authorChanged = createAction("AUTHOR_CHANGED",
    (currentPuzzleKey, value) =>
    ({currentPuzzleKey, value}),
    (_currentPuzzleKey, _value, timestamp = Date.now()) => ({timestamp}),
);

export const titleChanged = createAction("TITLE_CHANGED",
    (currentPuzzleKey, value) =>
    ({currentPuzzleKey, value}),
    (_currentPuzzleKey, _value, timestamp = Date.now()) => ({timestamp}),
);

export const createPDF = createAction("CREATE_PDF");

export const generatePattern = createAction("GENERATE_PATTERN");

export const saveCurrentPuzzle = createAction("SAVE_CURRENT_PUZZLE");

export const puzzlesLoaded = createAction("PUZZLES_LOADED",
    (puzzles) =>
    ({puzzles,})
);

export const changeCurrentPuzzle = createAction("CHANGE_CURRENT_PUZZLE", 
    (puzzleKey) => ({puzzleKey})
);