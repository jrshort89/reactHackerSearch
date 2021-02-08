import * as actionTypes from "../actionsTypes";

const initialState = {
  history: [],
  currentSearch: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SEARCH_HISTORY:
      return {
        ...state,
        currentSearch: action.currentSearch,
        history: [...state.history, action.history],
      };
    default:
      return state;
  }
};

export default searchReducer;
