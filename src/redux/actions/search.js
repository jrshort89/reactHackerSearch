import * as actionTypes from "../actionsTypes";

export const addSearchHistory = (searchText, searchResults) => {
  return {
    type: actionTypes.ADD_SEARCH_HISTORY,
    history: searchText,
    currentSearch: searchResults,
  };
};
